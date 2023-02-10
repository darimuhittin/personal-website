import React from "react";
import styles from "../styles/Home.module.scss";
const formDataReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        [action.name]: action.value,
      };
    case "SUBMIT":
      return {
        ...state,
        submitted: true,
      };
    default:
      return state;
  }
};

const handleSubmit = (formData) => {
  fetch("/api/contact", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }).then((res) => {
    console.log(res);
    if (res.status === 200) {
      return "success";
    } else {
      return "error";
    }
  });
};
const initialState = {
  name: "",
  email: "",
  message: "",
  submitted: false,
};
const ContactSection = () => {
  const [formData, dispatch] = React.useReducer(formDataReducer, initialState);
  return (
    <section id="contact" className="flex flex-col text-center my-10">
      <h5 className={styles.sectionTitle}>Contact Me</h5>
      <div className="flex flex-col space-y-4 my-10 mx-4 sm:w-full bg-second p-8 rounded-md">
        {formData.submitted ? (
          <div className="flex flex-col space-y-4">
            <h3 className="text-third text-2xl font-extrabold">
              Thank you for your message!
            </h3>
            <p className="text-third text-base font-extrabold">
              I will get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <>
            <div className="flex flex-col items-start space-y-2 justify-between">
              <label htmlFor="name" className="text-xl">
                Name:{" "}
              </label>
              <input
                className="bg-fourth rounded-md p-2 text-first w-full sm:w-64"
                type="text"
                name="name"
                id="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={(e) =>
                  dispatch({
                    type: "INPUT_CHANGE",
                    name: e.target.name,
                    value: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col items-start space-y-2 justify-between">
              <label htmlFor="name" className="text-xl">
                Email:{" "}
              </label>
              <input
                className="bg-fourth  rounded-md p-2 text-first w-full sm:w-64"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={(e) =>
                  dispatch({
                    type: "INPUT_CHANGE",
                    name: e.target.name,
                    value: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col items-start space-y-2 justify-between">
              <label htmlFor="name" className="text-xl">
                Message:{" "}
              </label>
              <textarea
                className="bg-fourth  rounded-md p-2 text-first w-full"
                type="text"
                name="message"
                id="message"
                rows={10}
                placeholder="Enter your message here..."
                value={formData.message}
                onChange={(e) =>
                  dispatch({
                    type: "INPUT_CHANGE",
                    name: e.target.name,
                    value: e.target.value,
                  })
                }
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-third text-first rounded-md hover:bg-fourth sm:w-64"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(formData);
                dispatch({
                  type: "SUBMIT",
                });
              }}
            >
              Send
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
