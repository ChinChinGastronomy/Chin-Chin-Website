import React, { useContext } from "react";
import emailjs from "emailjs-com";
import { GlobalContext } from "../../context/GlobalContext";
import "../../App.css";

const EnquireFormAndTrading = () => {
  const { tradingHours } = useContext(GlobalContext);
  const userId = process.env.REACT_APP_USER_ID;

  const sortedArray = tradingHours.sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pzi608s", "template_z83ozzd", e.target, userId)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="containerEnquire">
      <div className="section-form">
        <div className="enquires">
          <p>Enquires</p>
        </div>

        <form onSubmit={sendEmail} className="form-control">
          <div className="inputs">
            <label>Subject</label>
            <input type="text" placeholder="Subject" name="subject" />
          </div>
          <div className="inputs">
            <label>Name</label>
            <input type="text" placeholder="Name" name="name" />
          </div>
          <div className="inputs">
            <label>Email</label>
            <input type="email" placeholder="Email" name="email" />
          </div>
          <div className="inputs">
            <label>Phone</label>
            <input type="number" placeholder="Phone" name="phone" />
          </div>
          <div className="inputs">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="10"
              cols="50"
            />
          </div>
          <div className="inputs">
            <input
              type="submit"
              value="Send"
              className="btn-enquire"
              style={{ width: "30%" }}
            />
          </div>
        </form>
      </div>
      <div className="section-hours">
        <div className="hoursTitle">
          <p>Trading Hours</p>
        </div>
        <ul className="tradingHours">
          {sortedArray.map((hours, id) => {
            return (
              <li key={id} className={hours.ph && "publicHoliday"}>
                <p>{hours.day}</p>
                <p>{hours.hours}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default EnquireFormAndTrading;
