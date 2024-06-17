import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "../../styles/pricingPlans/pricing-plans.css"
function PricingPlansCore () {
    const navigate = useNavigate();
    const openStripeCheckoutPage = (url) => {
        window.location.href = url;
    };
    return (
        <>
         <section className="pricing-plans" >
        <div className="lamar-container">
            <div className="path">
                <Link to="/">
                <i class="fas fa-home"></i>
                </Link>
                <i class="fas fa-angle-right"></i> <span>Pricing Plans For PTE Core Courses</span>
            </div>
            {/* <h1>Choose the plan that fits for your team</h1>
            <p>
            Deploy your sites to global infrastructure in seconds. No credit card
            required
            </p> */}

            <div class="pricing">
            <div class="plan" onClick={()=> openStripeCheckoutPage('https://buy.stripe.com/aEUaFe3W92sG9LabII')}>
            {/* <div class="plan popular"> */}
                {/* <span className='most-popular-title'>Most Popular</span> */}
                <h2>
                    Online PTE Core Preparation Course 
                </h2>
                <div class="price">$225</div>
                <h2 className='students-number'>
                    For <span>One Student</span>
                </h2>
                <ul class="features">
                <li><i class="fas fa-check-circle"></i> 1 Student</li>
                <li><i class="fas fa-check-circle"></i> Five Interactive Online Sessions</li>
                <li><i class="fas fa-check-circle"></i> Three Recorded Sessions (Pre-Writing, Pre-Reading, Pronunciation)</li>
                <li><i class="fas fa-check-circle"></i> Customized Study Plans</li>
                <li><i class="fas fa-check-circle"></i> Daily Feedback</li>
                <li><i class="fas fa-check-circle"></i> Free Mock Tests with Full Analysis</li>
                <li><i class="fas fa-check-circle"></i> 1-1 Evaluation</li>
                <li><i class="fas fa-check-circle"></i> Interactive WhatsApp Groups</li>
                <li><i class="fas fa-check-circle"></i> 24/7 Support</li>
                {/* <li><i class="fas fa-times-circle"></i> No priority support</li> */}
                </ul>
                <button>Get Started</button>
            </div>
            <div class="plan" onClick={()=> openStripeCheckoutPage('https://buy.stripe.com/4gw14EfER7N02iIfYZ')}>
                <h2>
                    Online PTE Core Preparation Course 
                </h2>
                <div class="price">$410</div>
                <h2 className='students-number'>
                    For <span>Two Students</span>
                </h2>
                <ul class="features">
                <li><i class="fas fa-check-circle"></i> 2 Students</li>
                <li><i class="fas fa-check-circle"></i> Five Interactive Online Sessions</li>
                <li><i class="fas fa-check-circle"></i> Three Recorded Sessions (Pre-Writing, Pre-Reading, Pronunciation)</li>
                <li><i class="fas fa-check-circle"></i> Customized Study Plans</li>
                <li><i class="fas fa-check-circle"></i> Daily Feedback</li>
                <li><i class="fas fa-check-circle"></i> Free Mock Tests with Full Analysis</li>
                <li><i class="fas fa-check-circle"></i> 1-1 Evaluation</li>
                <li><i class="fas fa-check-circle"></i> Interactive WhatsApp Groups</li>
                <li><i class="fas fa-check-circle"></i> 24/7 Support</li>
                {/* <li><i class="fas fa-times-circle"></i> No priority support</li> */}
                </ul>
                <button>Get Started</button>
            </div>
            <div class="plan" onClick={()=> openStripeCheckoutPage('https://buy.stripe.com/28ofZygIVffs9LaeUW')}>
                <h2>
                    Online PTE Core Preparation Course 
                </h2>
                <div class="price">$570</div>
                <h2 className='students-number'>
                    For <span>Three Students</span>
                </h2>
                <ul class="features">
                <li><i class="fas fa-check-circle"></i> 3 Students</li>
                <li><i class="fas fa-check-circle"></i> Five Interactive Online Sessions</li>
                <li><i class="fas fa-check-circle"></i> Three Recorded Sessions (Pre-Writing, Pre-Reading, Pronunciation)</li>
                <li><i class="fas fa-check-circle"></i> Customized Study Plans</li>
                <li><i class="fas fa-check-circle"></i> Daily Feedback</li>
                <li><i class="fas fa-check-circle"></i> Free Mock Tests with Full Analysis</li>
                <li><i class="fas fa-check-circle"></i> 1-1 Evaluation</li>
                <li><i class="fas fa-check-circle"></i> Interactive WhatsApp Groups</li>
                <li><i class="fas fa-check-circle"></i> 24/7 Support</li>
                {/* <li><i class="fas fa-times-circle"></i> No priority support</li> */}
                </ul>
                <button>Get Started</button>
            </div>
            <div class="plan" onClick={()=> openStripeCheckoutPage('https://buy.stripe.com/bIY8x6boBffsbTi003')}>
                <h2>
                    Online PTE Core Preparation Course 
                </h2>
                <div class="price">$760</div>
                <h2 className='students-number'>
                    For <span>Four Students</span>
                </h2>
                <ul class="features">
                <li><i class="fas fa-check-circle"></i> 4 Students</li>
                <li><i class="fas fa-check-circle"></i> Five Interactive Online Sessions</li>
                <li><i class="fas fa-check-circle"></i> Three Recorded Sessions (Pre-Writing, Pre-Reading, Pronunciation)</li>
                <li><i class="fas fa-check-circle"></i> Customized Study Plans</li>
                <li><i class="fas fa-check-circle"></i> Daily Feedback</li>
                <li><i class="fas fa-check-circle"></i> Free Mock Tests with Full Analysis</li>
                <li><i class="fas fa-check-circle"></i> 1-1 Evaluation</li>
                <li><i class="fas fa-check-circle"></i> Interactive WhatsApp Groups</li>
                <li><i class="fas fa-check-circle"></i> 24/7 Support</li>
                {/* <li><i class="fas fa-times-circle"></i> No priority support</li> */}
                </ul>
                <button>Get Started</button>
            </div>
            <div class="plan" onClick={()=> openStripeCheckoutPage('https://buy.stripe.com/aEUdRqcsF9V88H6bIN')}>
                <h2>
                    Online PTE Core Preparation Course 
                </h2>
                <div class="price">$950</div>
                <h2 className='students-number'>
                    For <span>Five Students</span>
                </h2>
                <ul class="features">
                <li><i class="fas fa-check-circle"></i> 5 Students</li>
                <li><i class="fas fa-check-circle"></i> Five Interactive Online Sessions</li>
                <li><i class="fas fa-check-circle"></i> Three Recorded Sessions (Pre-Writing, Pre-Reading, Pronunciation)</li>
                <li><i class="fas fa-check-circle"></i> Customized Study Plans</li>
                <li><i class="fas fa-check-circle"></i> Daily Feedback</li>
                <li><i class="fas fa-check-circle"></i> Free Mock Tests with Full Analysis</li>
                <li><i class="fas fa-check-circle"></i> 1-1 Evaluation</li>
                <li><i class="fas fa-check-circle"></i> Interactive WhatsApp Groups</li>
                <li><i class="fas fa-check-circle"></i> 24/7 Support</li>
                {/* <li><i class="fas fa-times-circle"></i> No priority support</li> */}
                </ul>
                <button>Get Started</button>
            </div>
            </div>
        </div>
        </section>
            
        </>
    )
}

export default PricingPlansCore 
