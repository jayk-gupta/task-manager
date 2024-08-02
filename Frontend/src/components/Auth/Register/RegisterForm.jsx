import React from "react";
import styles from "./RegisterForm.module.css";
import NoteIcon from "../../UI/icons/NoteIcon";

function RegisterForm() {
  return (
    <div className=" p-12">
      <NoteIcon/>
      <h2 className="mb-12 text-2xl">Register</h2>
      {/* FORM */}
      <form className="flex flex-col gap-12">
        {/* EMAIL */}
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" required className={styles.input} />
        </div>
        {/* PASSWORD */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            className={styles.input}
          />
        </div>
        {/* CONFIRM PASSWORD */}
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input type="email" id="email" required className={styles.input} />
        </div>
        <button className={styles.button} type="submit">
          Register
        </button>
        <p>
          Already have an account? <a href="/login">Log In</a>
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
