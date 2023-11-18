import React, { useState } from "react";
import "./Footer.css";
const backendURL = "https://valscobackendtest.onrender.com";
const Footer = () => {
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    number: "",
    company: "",
  });
  const [isValid, setIsValid] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleOnChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
    const inputs = document.querySelectorAll("input");
    const validity = [...inputs].every((input) => input.checkValidity());
    setIsValid(!validity);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const url =
      "https://website-bad9f-default-rtdb.asia-southeast1.firebasedatabase.app/contactUsRecords.json";

    try {
      newContact.name = newContact.name.trim();
      newContact.email = newContact.email.trim();
      newContact.company = newContact.company.trim();
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newContact.name,
          email: newContact.email,
          number: newContact.number,
          company: newContact.company,
        }),
      });

      setIsSuccess(true);
      setIsValid(true);
      let savedEmail = newContact.email;
      let savedName = newContact.name;
      setTimeout(() => {
        setIsSuccess(false);
        setNewContact({ name: "", email: "", number: "", company: "" });
      }, 3000);
      const response2 = await fetch(backendURL, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: savedName, email: savedEmail }),
      });
    } catch (error) {
      alert(`The Following Error Occured: ${error}.\nKindly Try Again!`);
      setNewContact({ name: "", email: "", number: "", company: "" });
    }
  };
  return (
    <section id="contactuspage" className="contact-section">
      <div className="subheadings-1">
        <span>FUEL.</span>
        <span>ELEVATE.</span> <span>IGNITE YOUR</span>
        <span>SW SOLUTIONS.</span>
      </div>
      <div className="para">
        <p>
          "Ready to take your business to the next level?" Contact us today and
          discover how Valsco can empower your success. Our dedicated team of
          experts is here to provide you with cutting-edge software solutions
          tailored to your specific needs. Reach out to us now to schedule a
          consultation and explore the possibilities. Let us transform your
          business and drive it towards greater efficiency, productivity, and
          growth. Don't wait - unlock your full potential with Valsco. Contact
          us today.
          <hr />
          Experience the Valsco Difference, Request a Consultation Today!
        </p>
      </div>
      <form method="POST" action={backendURL} className="b-form">
        <h2>Get In Touch</h2>
        <div className="form-controls">
          <div className="input_fields">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={handleOnChange}
              value={newContact.name}
              placeholder="Your Name"
              name="name"
              required
              pattern="^[A-Za-z\s.]{3,50}$"
            />
            <span className="inp_error">
              Name should be 3-50 Characters Long
            </span>
          </div>
          <div className="input_fields">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={handleOnChange}
              value={newContact.email}
              placeholder="Your Email"
              name="email"
              required
            />
            <span className="inp_error">Please enter a Valid Email!</span>
          </div>
          <div className="input_fields">
            <label htmlFor="number">Phone Number</label>
            <input
              type="tel"
              id="number"
              onChange={handleOnChange}
              value={newContact.number}
              placeholder="Your Phone Number"
              name="number"
              required
              pattern="^(?:\+91\d{10}|\d{10})$"
            />
            <span className="inp_error">Please Enter a Valid Phone Number</span>
          </div>
          <div className="input_fields">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              onChange={handleOnChange}
              value={newContact.company}
              placeholder="Your Company/Organisation"
              name="company"
              required
              pattern="^[A-Za-z\s0-9.\+\$\*\\]{3,100}$"
            />
            <span className="inp_error">
              Company Name Should be 3-50 Characters Long
            </span>
          </div>
          <button
            type="submit"
            className="Submit_Btn"
            id="formSubmitButton"
            onClick={handleFormSubmit}
            disabled={isValid}
          >
            Click to send your message
          </button>
          {isSuccess && (
            <div id="successfulMessage">Your Message Sent Successfully!</div>
          )}
        </div>
      </form>
      <div className="contact-container">
        <div className="contact-Details">
          <div className="subheadings-2">
            <span>Have an Idea?</span>
            <span>Tell us about it!</span>
          </div>
          <div className="address">
            <a href="mailto:connect@valscotech.com">connect@valscotech.com</a>
            <p>
              NOIDA,J-3 SHAHABDI ENCLAVE
              <br />
              NOIDA, UTTAR PRADESH 201301
            </p>
            <span>Privacy Policy</span>
          </div>
        </div>
        <div className="social-handles">
          <i
            className="fa fa-github fa-4x icon-3d"
            style={{ fontSize: "48px" }}
          ></i>
          <i
            className="fa fa-twitter fa-4x icon-3d"
            style={{ fontSize: "48px" }}
          ></i>
          <i
            className="fa fa-facebook fa-4x icon-3d"
            style={{ fontSize: "48px" }}
          ></i>
          <a
            href="https://instagram.com/vals.co_tech?igshid=NTc4MTIwNjQ2YQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa fa-instagram fa-4x icon-3d"
              style={{ fontSize: "48px" }}
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/company/valscotech/?fbclid=PAAaZ3ATa670NzIC1DB7OLSwzO9bOqISugzSF9Bs-sWUJjBBKLuYvnkm-qUJw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa fa-linkedin fa-4x icon-3d"
              style={{ fontSize: "48px" }}
            ></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
