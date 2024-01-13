import React, { useState } from "react";
const RegistrationForm = () => {
  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    studyField: "",
    city: "",
    birthday: "",
    nationality: "",
    credibility: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="course-register-form">
      <h2>Welcome</h2>
      <p>
        Fill in your correct and UP-TO-DATE details so that we may contact you
        via email on further process
      </p>
      <form onSubmit={handleSubmit}>
        <div className="Std-Name">
          <div className="input-container">
            <input
              required
              type="text"
              name="fname"
              id="fname"
              placeholder="Your name"
              value={details.fname}
              onChange={(e) =>
                setDetails((prev) => {
                  return { ...prev, fname: e.target.value };
                })
              }
            />
            <label htmlFor="fname">
              First Name <span>*</span>
            </label>
          </div>
          <div className="input-container">
            <input
              required
              type="text"
              name="lname"
              id="lname"
              placeholder="Your last name"
              value={details.lname}
              onChange={(e) =>
                setDetails((prev) => {
                  return { ...prev, lname: e.target.value };
                })
              }
            />
            <label htmlFor="lname">
              Last Name <span>*</span>
            </label>
          </div>
        </div>
        <div className="input-container">
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="yourmail@gmail.com"
            value={details.email}
            onChange={(e) =>
              setDetails((prev) => {
                return { ...prev, email: e.target.value };
              })
            }
          />
          <label htmlFor="email">
            Email <span>*</span>
          </label>
        </div>
        <div className="input-container">
          <input
            required
            type="text"
            name="phone"
            id="phone"
            value={details.phone}
            onChange={(e) =>
              setDetails((prev) => {
                return { ...prev, phone: e.target.value };
              })
            }
          />
          <label htmlFor="studyField">
            Phone Number <span>*</span>
          </label>
        </div>
        <div className="input-container">
          <input
            required
            type="text"
            name="studyField"
            id="studyField"
            value={details.studyField}
            onChange={(e) =>
              setDetails((prev) => {
                return { ...prev, studyField: e.target.value };
              })
            }
          />
          <label htmlFor="studyField">
            Field of Study <span>*</span>
          </label>
        </div>
        <div className="input-container">
          <input
            required
            type="text"
            name="city"
            id="city"
            placeholder="Select city"
            value={details.city}
            onChange={(e) =>
              setDetails((prev) => {
                return { ...prev, city: e.target.value };
              })
            }
          />
          <label htmlFor="city">
            City <span>*</span>
          </label>
        </div>
        <div className="input-container">
          <input
            required
            type="date"
            name="birthday"
            id="birthday"
            value={details.birthday}
            onChange={(e) =>
              setDetails((prev) => {
                return { ...prev, birthday: e.target.value };
              })
            }
          />
          <label htmlFor="birthday">
            Birthday <span>*</span>
          </label>
        </div>
        <div className="input-container">
          <input
            required
            type="text"
            name="nationality"
            id="nationality"
            placeholder="Your Nationality"
            value={details.nationality}
            onChange={(e) =>
              setDetails((prev) => {
                return { ...prev, nationality: e.target.value };
              })
            }
          />
          <label htmlFor="nationality">
            Nationality <span>*</span>
          </label>
        </div>
        <div className="input-container condition-check">
          <input
            type="checkbox"
            name="credibility"
            required
            id="credibility"
            value={details.credibility}
            onChange={(e) =>
              setDetails((prev) => {
                return { ...prev, credibility: e.target.value };
              })
            }
          />
          <label htmlFor="credibility">
            I vouch that all the information i have filled above is completely
            true and Proceed to Payment
          </label>
        </div>
        <button type="submit">Enter</button>
      </form>
    </section>
  );
};

export default RegistrationForm;
