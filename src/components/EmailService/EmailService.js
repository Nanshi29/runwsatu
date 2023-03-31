import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./EmailService.module.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EmailService = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_1mmgvnr",
        "template_93ndqzt",
        form.current,
        "WaqSalJBYYSGjiyHT"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Sent");
        },
        (error) => {
          toast.error(error.text);
          // console.log(error.text);
        }
      );
    setIsLoading(false);
  };
  return (
    <div className={styles.contact_wrapper} id="contact">
      <div className={styles.contact_header}>CONTACT ME</div>
      <div className={styles.form_container}>
        <form className={styles.contact_form} ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Phone Number</label>
          <input type="text" name="phone_number" />
          <label>Message</label>
          <textarea name="message" />

          {isLoading ? (
            "Loading..."
          ) : (
            <button
              type="submit"
              className={styles.frm_btn}
            >
              Send
            </button>
          )}
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default EmailService;
