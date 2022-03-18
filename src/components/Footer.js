import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer id="sticky-footer" className="bg-light text-dark-50">
            <div className="container py-1">
                <div className="row">
                    <div className="col-md-6 col-12 my-auto">
                        <small>Copyright &copy; Haryanvi Developer</small>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="d-flex float-right">
                            <a href="https://www.agoda.com/?site_id=1759953&tag=29fc6e80-4f8c-788f-9ce6-9a82a65043dd&msclkid=a1ff8a85c7981da31112e8aa8157eda2">
                                <FaFacebookSquare className="connect text-dark" /></a>
                            <a href="https://www.agoda.com/?site_id=1759953&tag=29fc6e80-4f8c-788f-9ce6-9a82a65043dd&msclkid=a1ff8a85c7981da31112e8aa8157eda2">
                                <FaLinkedin className="connect text-dark" /></a>
                            <a href="https://www.agoda.com/?site_id=1759953&tag=29fc6e80-4f8c-788f-9ce6-9a82a65043dd&msclkid=a1ff8a85c7981da31112e8aa8157eda2">
                                <AiFillInstagram className="connect text-dark" /></a>
                            <a href="https://www.agoda.com/?site_id=1759953&tag=29fc6e80-4f8c-788f-9ce6-9a82a65043dd&msclkid=a1ff8a85c7981da31112e8aa8157eda2">
                                <IoLogoYoutube className="connect text-dark" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer