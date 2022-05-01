import React from 'react';
import img from '../Image/banner2.png'
import './Banner.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PhotoFilterIcon from '@mui/icons-material/PhotoFilter';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className="banner-wrapper" style={{backgroundImage: `url(${img})`}}>
                <div className="banner-heading">
                    <h3>Cari Cari</h3>
                    <p className='banner-content'>Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>
                </div>
                <div className="banner-items">
                    <div className="banner-item">
                        <div className="banner-icon icon-1">
                            <h6><FavoriteBorderIcon></FavoriteBorderIcon></h6>
                            <h4>0</h4>
                            <p>label</p>
                        </div>
                        <div className="banner-icon">
                            <h6><PhotoFilterIcon></PhotoFilterIcon></h6>
                            <h4>0</h4>
                            <p>label</p>
                        </div>
                        <div className="banner-icon">
                        <h6><PhotoFilterIcon></PhotoFilterIcon></h6>
                            <h4>0</h4>
                            <p>label</p>
                        </div>
                        <div className="banner-icon">
                        <h6><PhotoFilterIcon></PhotoFilterIcon></h6>
                            <h4>04</h4>
                            <p>label</p>
                        </div>
                    </div>
                </div>
             </div>
             
        </div>
    );
};

export default Banner;