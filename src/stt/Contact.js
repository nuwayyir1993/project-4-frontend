import React, { Component } from 'react';
import './Contact.css'



class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <form className="feedback">
                    <h1 className="title"> Contact me </h1>
                    <label  >Name </label><br />
                    <input className="form" type="name" placeholder="Your Name" />
                    <br />
                    <label>Email</label>
                    <input className="form" type="email" name="emailaddress" placeholder="Email Address" />
                    <br />
                    <label>Feedback</label>
                    <br />
                    <textarea className="form" rows="4" cols="50" placeholder="I hope to know your feedback about my App :)">
                    </textarea>
                    <br />

                   <center>
                   <button className='btnn' type="submit" >Submit</button>
                   </center>
                </form>



                {/* <a href="https://twitter.com/nonaal_harby" class="fa fa-twitter"></a> */}

                <h3 className="MyName">Nuwayyir<span> Almohammadi</span></h3>
                <p class="footer-links">
                    <a className= "twitter" href="https://twitter.com/nonaal_harby">Twitter    </a><img class="twitter-icon" src="/twitter.png" alt="" />

                    <a className= "githup" href="https://github.com/nuwayyir1993">Githup    </a><img class="githup-icon" src="/githup.png" alt="" />

                </p>
                <p class="footer-name">Nuwayyir &copy; 2019</p>

            </div>

        )
    }




}

export default Contact;