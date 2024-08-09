import React, { useState } from "react";
import { registerUser } from "../../../services/api";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import ConfirmPasswordInput from "../components/ConfirmPasswordInput";
import FormWrapper from "../components/FormWrapper";

// schema
const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one number" }),
  confirmPassword: z.string(),
});

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setshowPassword] = useState(true);
  const navigate = useNavigate();

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleConfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }
  function handlePasswordVisibility() {
    setshowPassword(!showPassword);
  }
  // Submit handler
  async function handleSubmit(e) {
    e.preventDefault();
    // validate form data
    const validationResult = schema.safeParse({
      email,
      password,
      confirmPassword,
    });
    if (!validationResult.success) {
      // set validation errors
      const validationErrors = validationResult.error.errors.reduce(
        (acc, error) => {
          acc[error.path[0]] = error.message;
          return acc;
        },
        {},
      );
      setErrors(validationErrors);
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    }
    try {
      console.log("in try block");
      const response = await registerUser({ email, password });
      console.log(response);
      alert("Registration successful");
      navigate("/login");
    } catch (err) {
      console.error("Error registering user");
    }
  }
  ///////////////////////////////////////////////////////////////
  // JSX
  return (
    <div className="p-12">
      <FormWrapper title="Register" handleSubmit={handleSubmit}>
        <EmailInput email={email} handleEmail={handleEmail} errors={errors} />
        <PasswordInput
          password={password}
          handlePassword={handlePassword}
          showPassword={showPassword}
          handlePasswordVisibility={handlePasswordVisibility}
          errors={errors}
        />
        <ConfirmPasswordInput
          confirmPassword={confirmPassword}
          handleConfirmPassword={handleConfirmPassword}
          errors={errors}
        />
        <p>
          Already have an account? <a href="/login">Log In</a>
        </p>
      </FormWrapper>
    </div>
  );
}

export default RegisterForm;
