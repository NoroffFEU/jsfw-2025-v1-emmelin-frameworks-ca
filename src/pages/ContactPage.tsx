import { useState } from "react";
import styles from "./ContactPage.module.css";

function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newErrors = {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    };

    if (fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters.";
    }

    if (subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }

    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (hasErrors) {
      setSuccessMessage("");
      return;
    }

    setSuccessMessage("Your message has been sent!");

    setFullName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <main className={styles.contactPage}>
      <section className={styles.contactContainer}>
        <h1 className={styles.title}>Contact Us</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName">Full Name:</label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && (
              <p className={styles.errorMessage}>{errors.fullName}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className={styles.errorMessage}>{errors.email}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject:</label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            {errors.subject && (
              <p className={styles.errorMessage}>{errors.subject}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && (
              <p className={styles.errorMessage}>{errors.message}</p>
            )}
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>

        {successMessage && (
          <p className={styles.successMessage}>{successMessage}</p>
        )}
      </section>
    </main>
  );
}

export default ContactPage;
