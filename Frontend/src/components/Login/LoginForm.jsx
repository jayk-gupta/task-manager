import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [hidePassword, setHidePassword] = useState(true);
  // Event handlers
  function emailHandler(e) {
    setEmail(e.target.value);
  }
  function passwordHandler(e) {
    setPassword(e.target.value);
  }
  function passwordVisibilityHandler() {
    setHidePassword(!hidePassword);
  }
  return (
    <div>
      <form>
        <div className="email mb-4 flex flex-col">
          <label htmlFor="email" className="mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={emailHandler}
            className={`rounded-md border-2 bg-gray-50 p-2 focus:outline-none focus:ring-2 focus:ring-orange-400`}
          />
        </div>
        <div className="password mb-4 flex w-96 flex-col">
          <label htmlFor="password" className="mb-1">
            Password
          </label>

          <input
            className={`rounded-md border-2 bg-gray-50 p-2 focus:outline-none focus:ring-2 focus:ring-orange-400`}
            type={hidePassword ? "password" : "text"}
            id="password"
            value={password}
            onChange={passwordHandler}
            minLength={6}
            maxLength={12}
          />
          <span
            onClick={passwordVisibilityHandler}
            className="relative bottom-7 left-[350px]"
          >
            {hidePassword ? (
              <VscEyeClosed
                className={`${hidePassword} ? visible:hidden cursor-pointer`}
              />
            ) : (
              <VscEye
                className={`${hidePassword} ? hidden:visible cursor-pointer`}
              />
            )}
          </span>
        </div>
        <button className="btn btn-error mt-4 w-full bg-[#EF846A] text-sm text-white hover:bg-[#d44d27]">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
