import React, { useRef } from "react";
import styles from "../styles/Home.module.scss";
import emailjs from "@emailjs/browser";

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
    case "RESET_SUBMIT":
      return {
        submitted: false,
      };
    default:
      return state;
  }
};

const initialState = {
  user_name: "",
  user_email: "",
  message: "",
  submitted: false,
};
const ContactSection = () => {
  const [formData, dispatch] = React.useReducer(formDataReducer, initialState);
  const form = useRef();

  const sendEmail = (e) => {
    dispatch({ type: "SUBMIT" });

    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICEID,
        process.env.NEXT_PUBLIC_TEMPLATEID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLICKEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          dispatch({ type: "RESET_SUBMIT" });
        }
      );
  };

  return (
    <section id="contact" className="flex flex-col text-center my-10">
      <h5 className={styles.sectionTitle}>Contact Me</h5>
      <div className="flex flex-col space-y-4 my-10 mx-4 sm:w-full bg-second p-8 rounded-md bg-opacity-70">
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
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col items-start space-y-2 justify-between">
              <label htmlFor="name" className="text-xl">
                Name:{" "}
              </label>
              <input
                className="bg-fourth rounded-md p-2 text-first w-full sm:w-64"
                type="text"
                name="user_name"
                id="user_name"
                placeholder="Enter Name"
                value={formData.user_name}
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
                name="user_email"
                id="user_email"
                placeholder="Enter Email"
                value={formData.user_email}
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
              className="px-4 py-2 mt-4 bg-third text-first rounded-md hover:bg-fourth sm:w-64"
            >
              SEND
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
