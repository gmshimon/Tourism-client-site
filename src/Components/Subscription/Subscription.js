import React, {useRef} from 'react';
import './Subscription.css';
const Subscription = () => {
    const emailRef = useRef('');
    const handleSubscription = () => {
        alert('Thank you for subscription');
        emailRef.current.value = '';
    }
    return (
        <div>
            <div className="p-5" id="Subscribe">
                <section className="container d-flex justify-content-center align-items-center rounded-3" id="subscribe-section">
                    <div className="">
                        <h2 id="h2">LET'S STAY IN TOUCH</h2>
                        <p>Get updates on special services</p>
                        <input ref={emailRef} className="p-2 border rounded-2" id="input" type="email" placeholder="ENTER YOUR MAIL" />
                        <button onClick={handleSubscription} type="button" className="btn btn-primary" id="submit-btn">Submit</button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Subscription;