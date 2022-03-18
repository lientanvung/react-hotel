import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
    return (
        <>
        <Hero hero="defaultHero">
        </Hero>
        <Banner title="Phòng Sang Trọng" subtitle="phòng deluxe bắt đầu từ 300">
                <Link to="/rooms" className="btn btn-primary">
                    Những căn phòng của chúng ta
                </Link>
        </Banner>
        <Services/> 
        <FeaturedRooms/>
        </>

    )
}
