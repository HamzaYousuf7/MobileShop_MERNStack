import React from 'react';
import { Link } from "react-router-dom";

const userLogOrSing = () => {
    return (  <div id="page-content" className="single-page">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <ul className="breadcrumb">
                    <li><Link to="index.html">Home</Link></li>
                    <li><Link to="account.html">Account</Link></li>
                </ul>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="heading"><h2>Login</h2></div>
                <form name="form1" id="ff1" method="post" action="login.php">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username :" name="username" id="username" required/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password :" name="email" id="email" required/>
                    </div>
                    <button type="submit" className="btn btn-1" name="login" id="login">Login</button>
                    <Link to="#">Forgot Your Password ?</Link>
                </form>
            </div>
            <div className="col-md-6">
                <div className="heading"><h2>New User ? Create An Account.</h2></div>
                <form name="form2" id="ff2" method="post" action="register.php">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="First Name :" name="firstname" id="firstname" required />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Last Name :" name="lastname" id="lastname" required />
                    </div>
                    <div className="form-group">
                        <input type="tel" className="form-control" placeholder="Email Address :" name="email" id="email" required />
                    </div>
                    <div className="form-group">
                        <input type="tel" className="form-control" placeholder="Mobile :" name="phone" id="phone" required />
                    </div>
                    <div className="form-group">
                        <input name="gender" id="gender" type="radio"/> Male <input name="gender" id="gender" type="radio"/> Female 
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password :" name="password" id="password" required/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Retype Password :" name="repassword" id="repassword" required/>
                    </div>
                    <div className="form-group">
                        <input name="agree" id="agree" type="checkbox" /> I agree to your website.
                    </div>
                    <button type="submit" className="btn btn-1">Create</button>
                </form>
            </div>
        </div>
    </div>
</div>
);
}
 
export default userLogOrSing;