import styles from "./page.module.css";
import Image from "next/image";
function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          alt="contact banner"
          src="/contact.png"
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Insert your message here"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
