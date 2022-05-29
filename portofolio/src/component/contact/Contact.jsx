import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useRef } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
    const formRef = useRef()

    const handleSubmit = (e)=>{
        e.preventDefaultf()
        emailjs
        .sendForm(
            'service_09gnpsh',
            'template_oi4m7uo',
            formRef.current,
            'AhMujrWHCzPbF8dhm'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        
    }
  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">
                    Contact Me</h1> 
                <div className="c-info">
                    <div className="c-info-item">
                        <img 
                        src={Phone}
                        alt="" 
                        className="c-icon" 
                        />
                        +62 821 6535 9752
                    </div>
                    <div className="c-info-item">
                        <img src={Email} alt="" className="c-icon" />
                        stephanienapitupulu@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={Address} alt="" className="c-icon" />
                        Bandar Lampung
                    </div>
            </div>
        </div>
        <div className="c-right">
                <p className="c-desc">
                    <b>Send me an Email</b> 
                </p>
                <form ref={formRef} onSubmit={handleSubmit} /> 
                <form>
                    <input type="text" placeholder="Name" name="user_name" />
                    <input type="text" placeholder="Subject" name="user_subject" />
                    <input type="text" placeholder="Email" name="user_email" />
                    <textarea rows="5" placeholder="Message" name="message" />
                    <button>Submit</button>
                </form>                   
            </div>
        </div>
    </div>
  );
}

export default Contact;
