import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import {Link} from 'react-router-dom';
function About() {
    return (
    <div className="container aboutus">
        <div className="row">
            <div className="col-md-6 col-12 my-auto">
                <img src={require('../images/about.svg')} alt="about us" className="img-fluid" />
            </div>
            <div className="col-md-6 col-12 my-auto">
                <h1 className="display-4 text-center my-5">Về chúng tôi </h1>
                <p className="lead text-justify text-center">	
Câu hát nồng nàn của Nhạc sĩ Nguyễn Cường làm rung động trái tim du khách phương xa đến thăm Thành phố cao nguyên miền Trung xinh đẹp.</p>
                <div className="text-center col-md-6 col-12 mx-auto">
                    <Link to="/contact" className="btn btn-outline-dark btn-block btn-lg my-5">Liên hệ chúng tôi</Link>
                </div>
            </div>
        </div>
        <div className="about_company">
            <h1 className="display-4">Về công ty</h1>
            <div className="pt-4">
                <p className="about_info">Ra đời và chính thức đi vào hoạt động từ tháng 12-2005, khách sạn Hoàng Anh Gia Lai tọa lạc ngay Quảng trường Phù Đổng - Trung tâm thành phố Pleiku. Khách sạn tiêu chuẩn 4 sao đầu tiên tại khu vực Tây Nguyên góp phần tô điểm cho Thành phố Pleiku thơ mộng vẻ đẹp hiện đại, hoành tráng.</p>
            </div>
        </div>
        <div className="testimony">
            <h1 className="display-4 mb-4">Khách hàng của chúng tôi nói gì</h1>
            <div className="row mb-5">
                <div className="col-md-10 col-12 mx-auto">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                        </ol>
                        <div className="carousel-inner card border-0 shadow-lg p-4">
                            <div className="carousel-item active text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer.svg')} className="text-center img-fluid" width="450" height="400" alt="customer1" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">Khách hàng ABC</h3>
                                            <p>Không có cuộc sống tự do ngay bây giờ, đôi khi mềm mại từ rung động.Trước</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer1.svg')} className="text-center img-fluid" width="450" height="400" alt="customer2" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">Khách hàng ABC</h3>
                                            <p>Nỗi đau chính là tình yêu, khách hàng chính </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer3.svg')} className="text-center img-fluid" width="450" height="400" alt="customer3" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">RTY khách hàng</h3>
                                            <p>Nỗi đau chính là tình yêu, là hệ thống lưu trữ chính.Đó là một lợi thế lớn của khóa học, hoặc những người chơi sô cô la chính</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="row">
                                    <div className="col-md-8 col-12 my-auto">
                                        <img src={require('../images/customers/customer4.svg')} className="text-center img-fluid" width="450" height="400" alt="customer4" />
                                    </div>
                                    <div className="col-md-4 col-12 my-auto">
                                        <div className="text-dark">
                                            <h3 className="font-weight-bolder ">RTY khách hàng</h3>
                                            <p>Nỗi đau chính là tình yêu</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Trước</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Tiếp theo</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="team">
            <h1 className="display-4">Đội ngũ của chúng tôi</h1>
        </div>
        <div className="row mb-5">
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4">
                    <img src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/10/12/844415/Bau-Duc-1.jpg" className="card-img-top" alt="director" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">Giám đốc</h5>
                        <div className="card-text text-black-50">CEO <p className="float-right">5 years</p>
                        </div>
                        <h6 className="mt-5">KẾT NỐI</h6>
                        <div className="d-flex justify-content-around">
                            <FaFacebookSquare className="connect" />
                            <AiFillInstagram className="connect" />
                            <FaLinkedin className="connect" />
                            <IoLogoYoutube className="connect" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4">
                    <img src="http://thanhtra.com.vn/portals/0/news_images/2019/09/khaithacdat/anh_1_3.jpg" className="card-img-top" alt="director" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">Thành viên của đội</h5>
                        <div className="card-text text-black-50">Người quản lý <p className="float-right">5 năm</p>
                        </div>
                        <h6 className="mt-5">KẾT NỐI</h6>
                        <div className="d-flex justify-content-around">
                            <FaFacebookSquare className="connect" />
                            <AiFillInstagram className="connect" />
                            <FaLinkedin className="connect" />
                            <IoLogoYoutube className="connect" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4">
                    <img src="https://source.unsplash.com/9UVmlIb0wJU/500x350" className="card-img-top" alt="director" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">Thành viên của đội</h5>
                        <div className="card-text text-black-50">Người quản lý <p className="float-right">8 năm</p>
                        </div>
                        <h6 className="mt-5">KẾT NỐI</h6>
                        <div className="d-flex justify-content-around">
                            <FaFacebookSquare className="connect" />
                            <AiFillInstagram className="connect" />
                            <FaLinkedin className="connect" />
                            <IoLogoYoutube className="connect" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default About;