import React from 'react';
import './Award.css';
const Award = () => {
    return (
        <div className="award-container container">
            <div className="text-center mb-3">
                <p className="fw-bold">Leading Online Travel Agency</p>
                <h4>Winning Multiple World Travel Award</h4>
            </div>
            <div className="text-center ">
                <div className="d-flex justify-content-center">
                    <div className="image">
                        <img className="w-50" src='https://utility-assets.s3.ap-southeast-1.amazonaws.com/bangladeshs-leading-travel-agency-2020.png' alt="" />
                    </div>
                    <div className="image">
                        <img className="w-50" src="https://utility-assets.s3.ap-southeast-1.amazonaws.com/bangladeshs-leading-online-travel-agency-2020.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Award;