import React, { Component } from 'react'
import defaultBcg from '../images/room-3.jpeg';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {
    constructor (props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = RoomContext;
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return (<div className="container roomerror">
                    <div className="row my-5">
                        <div className="col-md-6 col-12 mx-auto">
                            <div className="card shadow-lg border-0 p-4 error">
                                <h1 className="text-center display-4">LẤY LÀM TIẾC</h1>
                                <h3>Không thể tìm thấy căn phòng nào như vậy ...</h3>
                                <Link to="/rooms" className="btn btn-warning mt-4 ">Quay lại phòng</Link>
                            </div> 
                        </div>
                    </div>
                </div>);
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;
        const [mainImg, ...defaultBcg] = images;
        return (
            <>
            <StyledHero img={mainImg || this.state.defaultBcg }>
           
            <Banner title={`${name} phòng`}>
                    <Link to="/rooms" className="btn btn-primary">Quay lại phòng</Link>
            </Banner>
            </StyledHero>
            <section className="single-room container">
               <div className="row">
                    {defaultBcg.map((item,index) => {
                        return (
                        <div className="col-md-4 col-12 mx-auto" key={index}>
                            <div className="card border-0 shadow-lg">
                               <img key={index} src={item} alt={name} className="img-fluid" />
                            </div>
                        </div>)
                    })}
               </div>
               <div className="single-room-info">
                   <article className="desc">
                      <h3>Chi tiết</h3>
                      <p>{description}</p>
                   </article>
                   <article className="info">
                      <h3>Thông tin</h3>
                      <h6>giá bán : {price} VND</h6>
                      <h6>kích cỡ  : {size} m3</h6>
                      <h6>
                      công suất tối đa : {" "}
                              {capacity > 1 ? `${capacity} Mọi người`: `${capacity} người`}
                      </h6>
                      <h6>{pets? 'cho phép vật nuôi': 'không cho phép vật nuôi'}</h6>
                      <h6>{breakfast && "bao gồm bữa sáng miễn phí"}</h6>
                   </article>
               </div>
            </section>
            <section className="room-extras">
                <h3>Bổ sung</h3>
                <ul className="extras">
                    {extras.map((item,index) => {
                          return <li key={index}>{item}</li>
                    })}
                </ul>
                <div className="p-4 clearfix">
                    <div className="row">
                       <div className="col-md-3 col-12 ml-auto">
                          <Link to={`/booknow/${this.state.slug}`} className="btn btn-outline-primary btn-block btn-lg float-right ">Đặt bây giờ</Link>
                       </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}
