import React from "react";

export default function Info() {
    return (
        <div>
            <img className="image-dp" src="./images/Samkit_Dp.jpg" alt=""></img>
            <div>
                <h3 className="name">Samkit Barbhaya</h3>
                <h6 className="role">Software Developer</h6>
                <div className="button-section">
                    <a href="mailto:samkitbarbhaya@gmail.com?" target="_blank">
                        <button type="submit" className="email-button">
                            <img className="email-icon" src="./images/email.png" height="9.6px" width="12.8px" alt="" />
                            Email
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/samkit-barbhaya/" target="_blank">
                        <button className="linkedin-button">
                            <i className="fa fa-linkedin fa-1x" color="black"></i>
                            Linkedin
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}