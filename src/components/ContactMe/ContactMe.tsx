import { useState } from "react";
import MyButton from "../UI/MyButton/MyButton";
import styles from "./ContactMe.module.css";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import emailjs from "emailjs-com";

interface iForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<iForm>({ defaultValues: {} });

  const submit: SubmitHandler<iForm> = (data: iForm) => {
    // console.log(data);
  };

  const isName = (name: string) => {
    const str = name.trim();
    if (str !== undefined && str !== "" && str.length > 3) {
      return true;
    }
    return false;
  };
  const isEmail = (email: string) => {
    const str = email.trim();
    const reg = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    const validateEmail = reg.exec(str);
    if (str !== undefined && str !== "" && validateEmail) {
      return true;
    }
    return false;
  };

  const isPhone = (phone: string) => {
    const reg = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    return reg.test(phone);
  };

  const error: SubmitErrorHandler<iForm> = (error) => {
    console.log(error);
  };

  const sendMail = () => {
    if (isValid) {
      let parms = {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
      };
      emailjs
        .send("service_bp7ztlm", "template_h5rihua", parms, "fCc4VSykWCMmG0Khb") // ("service", "template", parms, "Учетная запись => Открытый ключ")
        .then((response) => {
          alert("Сообщение отправлено!!");
        })
        .catch((error) => {
          console.error("Error sending email: ", error);
        });
    }
  };

  return (
    <section className={styles.contact}>
      <h1>Свяжитесь сомной</h1>
      <form action="#" onSubmit={handleSubmit(submit, error)}>
        <div className={styles.input_box}>
          <div className={`${styles.input_field} ${styles.box}`}>
            <input
              {...register("name", { required: true, validate: isName })}
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
              className={`${styles.form_group}`}
            />
            <input
              {...register("email", { required: true, validate: isEmail })}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Addres"
              className={`${styles.form_group}`}
              autoComplete="off"
            />
          </div>
          <div className={styles.box}>
            <input
              {...register("phone", { required: true, validate: isPhone })}
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              className={`${styles.form_group}`}
              autoComplete="off"
            />
          </div>
          <div className={styles.box}>
            <input
              {...register("subject")}
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className={`${styles.form_group}`}
              autoComplete="off"
            />
          </div>
          <textarea
            {...register("message")}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            className={`${styles.form_group}`}
            autoComplete="off"
          ></textarea>
        </div>

        <MyButton type="submit" onClick={() => sendMail()} active={true}>
          Отправить сообщение
        </MyButton>
      </form>
    </section>
  );
}
