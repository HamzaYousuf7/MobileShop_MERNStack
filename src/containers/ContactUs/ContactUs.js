import React from 'react';

const contactUs = () => {
    return ( <div id="page-content" className="single-page">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <ul className="breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="heading"><h1>CONTACT US</h1></div>
            </div>
            <div className="col-md-6" style={{marginBottom:"30px"}}>
                <form name="form1" id="ff" method="post" action="contact.php">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Name *" name="name" id="name" required data-validation-required-message="Please enter your name."/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Your Email *" name="email" id="email" required data-validation-required-message="Please enter your email address."/>
                    </div>
                    <div className="form-group">
                        <input type="tel" className="form-control" placeholder="Your Phone *" name="phone" id="phone" required data-validation-required-message="Please enter your phone number."/>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Your Message *" name="message" id="message" required data-validation-required-message="Please enter a message."></textarea>
                    </div>
                    <button type="submit" className="btn btn-1">Send Message</button>
                </form>
            </div>
            <div className="col-md-6">
                <p><span className="glyphicon glyphicon-home"></span> California, United States 3000009</p>
                <p><span className="glyphicon glyphicon-earphone"></span> +6221 888 888 90 , +6221 888 88891</p>
                <p><span className="glyphicon glyphicon-envelope"></span> info@yourdomain.com</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.289259162295!2d-120.7989351!3d37.5246781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8091042b3386acd7%3A0x3b4a4cedc60363dd!2sMain+St%2C+Denair%2C+CA+95316%2C+Hoa+K%E1%BB%B3!5e0!3m2!1svi!2s!4v1434016649434" width="95%" height="230" frameBorder="0" style={{border:"0px"}} title="nothing" ></iframe>
            </div>
        </div>
    </div>
</div>
 );
}
 
export default contactUs;