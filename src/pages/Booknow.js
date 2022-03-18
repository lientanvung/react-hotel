import React, { Component } from 'react'
import { RoomContext } from '../context';
import { Link } from 'react-router-dom';
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import defaultBcg from '../images/room-3.jpeg';
export default class Booknow extends Component {
    constructor (props){
        super(props);
        this.state = {
        slug: this.props.match.params.slug,
        defaultBcg,
        startDate: new Date(),
        endDate: new Date(),
    };
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    }
    handleChangeStart(date) {
        this.setState({
        startDate: date
        });
    }
    handleChangeEnd(date) {
        this.setState({
        endDate: date
        });
    }
    calculateDaysLeft(startDate, endDate) {
        if (!moment.isMoment(startDate)) startDate = moment(startDate);
        if (!moment.isMoment(endDate)) endDate = moment(endDate);
        return endDate.diff(startDate, "days");
    }
    static contextType = RoomContext;
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        const { startDate, endDate } = this.state;
        const daysLeft = this.calculateDaysLeft(startDate, endDate);
    if(!room){
        return (<div className="container roomerror">
            <div className="row my-5">
                <div className="col-md-6 col-12 mx-auto">
                    <div className="card shadow-lg border-0 p-4 error">
                        <h1 className="text-center display-4">LẤY LÀM TIẾC</h1>
                        <h3>Không có căn phòng nào như vậy có thể được tìm thấy...</h3>
                        <Link to="/rooms" className="btn btn-warning mt-4 ">Trở lại phòng</Link>
                    </div>
                </div>
            </div>
        </div>);
        }
        const {name,capacity,size,price,breakfast,pets,images} = room;
        const [mainImg, ...defaultBcg] = images;
        return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
                    <div>
                        <h1 className="display-4">Đặt trước</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12 my-auto">
                            <img src={mainImg || defaultBcg} className="img-fluid" alt="selected room" />
                        </div>
                        <div className="col-md-6 col-12 my-auto">
                            <h1>Chi tiết phòng</h1>
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th>Loại phòng</th>
                                        <td>{name}</td>
                                    </tr>
                                    <tr>
                                        <th>Diện tích</th>
                                        <td>{capacity}</td>
                                    </tr>
                                    <tr>
                                        <th>Kích cỡ</th>
                                        <td>{size}</td>
                                    </tr>
                                    <tr>
                                        <th>Bữa sáng</th>
                                        <td>{breakfast === true ? `Bao gồm`: `Không bao gồm`}</td>
                                    </tr>
                                    <tr>
                                        <th>Vật nuôi</th>
                                        <td>{pets ===true ? `Cho phép` : `Không Cho phép`}</td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="Fromdate" className="font-weight-bolder mr-3">Từ ngày </label>
                                <DatePicker selected={this.state.startDate} onChange={this.handleChangeStart} className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="Todate" className="font-weight-bolder mr-3">Đến nay </label>
                                <DatePicker selected={this.state.endDate} onChange={this.handleChangeEnd} className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <h6 className="font-weight-bolder">Số ngày : {daysLeft}</h6>
                            <mark>Vui lòng đảm bảo thời gian checkin là từ 9 giờ sáng đến 12 giờ tối</mark>
                        </div>
                        <div className="col-md-6 col-12">
                            <h6 className="font-weight-bold">Giá mỗi ngày: <span className="badge badge-info">{price} VND</span></h6>
                            <h6 className="font-weight-bold">Tổng giá phải trả : <span className="text-primary">{daysLeft*price} VND</span></h6>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-md-6 col-12">
                            <div className="form-group">
                                <label htmlFor="payment" className="font-weight-bolder">Các lựa chọn thanh toán</label>
                                <select className="form-control">
                                    <option disabled>Chọn tùy chọn thanh toán</option>
                                    <option value="Credit">Thẻ tín dụng</option>
                                    <option value="Debit">Thẻ ghi nợ</option>
                                    <option value="checkin">Thanh toán khi đăng ký</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 my-auto">
                            <div className="col-md-6 col-12 float-right">
                                <button className="btn btn-block btn-outline-primary" data-toggle="modal" data-target="#thanks">Xác nhận đặt chỗ</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="thanks">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-4">
                            <h3>Thank you </h3>
                            <p className="lead">Phòng của bạn đã được đặt thành công ....</p>
                        </div>
                        <div className="modal-footer">
                            <Link to="/" className="btn btn-dark">Nhà Goto</Link>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}