import { useState } from "react";
import MyButton from "../UI/MyButton/MyButton";
import styles from "./ContactMe.module.css";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import emailjs from "emailjs-com";

interface iForm {
  name: string;
  email: string;
  phone: number;
  subject: string;
  message: string;
}

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [active, setActive] = useState(true);

  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<iForm>({ defaultValues: {} });

  const submit: SubmitHandler<iForm> = (data: iForm) => {
    console.log(data);
  };

  const isName = (data: any) => {
    console.log("validate");
    console.log(data);
    return false;
  };

  const error: SubmitErrorHandler<iForm> = (data) => {
    console.log(data);
    console.log(error);
  };

  const sendMail = () => {
    console.log();
    let parms = {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    };
    emailjs
      .send("service_bfk61em", "template_cp1wp5w", parms, "HwabuzZpB9X61c76V")
      .then((response) => {
        alert("Сообщение отправлено!!");
      })
      .catch((error) => {
        console.error("Error sending email: ", error);
      });
  };

  return (
    <section className={styles.contact}>
      <h1>Свяжитесь сомной</h1>
      <form action="#" onSubmit={handleSubmit(submit, error)}>
        <div className={styles.input_box}>
          <div className={`${styles.input_field} ${styles.box}`}>
            <input
              {...register("name", { required: true, validate: isName })}
              // aria-invaliad={errors.name ? true : false}
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
              className={`${styles.form_group}`}
            />
            <input
              {...register("email", { required: true })}
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
              {...register("phone")}
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

        <MyButton type="submit" onClick={() => sendMail()} active={active}>
          Отправить сообщение
        </MyButton>
        {/* <MyButton type="button" onClick={() => clearErrors()} active={active}>
          Очистить ошибки
        </MyButton> */}
        {/* <MyButton type="button" onClick={() => reset()} active={active}>
          Очистить Форму
        </MyButton> */}
      </form>
    </section>
  );
}
