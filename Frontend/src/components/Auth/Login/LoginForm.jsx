import React, { useState } from "react";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import FormWrapper from "../components/FormWrapper";
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import { loginUser } from "../../../services/api";
import axios from "axios";
// schema

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setshowPassword] = useState(true);
  const navigate = useNavigate();
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handlePasswordVisibility() {
    setshowPassword(!showPassword);
  }
  async function handleSubmit(e) {
    console.log("hi");
    e.preventDefault();
    try {
      console.log("in try");
      const response = await loginUser({ email, password });
      // store the token in a cookie
      document.cookie = `token=${response.token}; path=/`;
      axios.defaults.headers.common["Authorization"] =
        `Bearer ${response.token}`;
      console.log(response);
      navigate("/home");
    } catch (err) {
      console.error("Error registering user");
    }
  }
  return (
    <div className="p-12">
      <FormWrapper title="Login" handleSubmit={handleSubmit}>
        <EmailInput email={email} handleEmail={handleEmail} errors={errors} />
        <PasswordInput
          password={password}
          handlePassword={handlePassword}
          showPassword={showPassword}
          handlePasswordVisibility={handlePasswordVisibility}
          errors={errors}
        />
        <p>
          Don't have an account? <a href="/register">Sign Up</a>
        </p>
      </FormWrapper>
    </div>
  );
}

export default LoginForm;
