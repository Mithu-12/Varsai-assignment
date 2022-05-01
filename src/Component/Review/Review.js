import React from 'react';
import './Review.css';
import img from '../Image/img3.png';
import img2 from '../Image/img2.png';
import img3 from '../Image/img4.png';
import flag from '../Image/flag.png'

const Review = () => {
    return (
        <div>
            <div className="review-container">
            <h2>Review</h2>
                <div className="review-wrapper">
                    <div className="review-card">
                        <div ClassName="review-info">
                            <img className="review-img" src={img} alt="" />
                            <div className="review-profile">
                                <p>Hellen Jummy</p>
                                <img className='img-profile' src={flag} alt="" /> 
                                <span>  Palo Alto, CA</span>
                            </div>
                        </div>
                        <div className="review-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. </p>
                        </div>
                    </div>
                    <div className="review-card">
                        <div ClassName="review-info">
                            <img className="review-img" src={img2} alt="" />
                            <div className="review-profile">
                                <p>Hellen Jummy</p>
                                <img className='img-profile' src={flag} alt="" /> 
                                <span>  Palo Alto, CA</span>
                            </div>
                        </div>
                        <div className="review-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. </p>
                        </div>
                    </div>
                    <div className="review-card">
                        <div ClassName="review-info">
                            <div className="review-div">
                            <img className="review-img" src={img3} alt="" />
                            </div>
                            <div className="review-profile">
                                <p>Hellen Jummy</p>
                                <img className='img-profile' src={flag} alt="" /> 
                                <span>  Palo Alto, CA</span>
                            </div>
                        </div>
                        <div className="review-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;