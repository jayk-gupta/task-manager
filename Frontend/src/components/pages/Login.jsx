import React from "react";
import "../styles/login.css";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import Cube from "../ThreeJS/Cube";
import LoginForm from "../Login/LoginForm";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);
const flexClass = "flex justify-center items-center";

function Login() {
  return (
    <div className={`bg-white h-screen ${flexClass}`}>
      <div
        className={`
          flex flex-col px-12
       project-info w-1/4
       rounded-xl h-5/6 text-left gap-6
       `}
      >
        <header className=" flex gap-4 items-center mt-12 mb-16 font-mono">
          <lord-icon
            style={{ width: "50px", height: "50px" }}
            trigger="loop"
            colors="primary:#121331,secondary:#ffe"
            stroke="bold"
            load="lazy"
            speed="0.2"
            src="/wired-flat-56-document.json"
          ></lord-icon>
          <h3 className="text-3xl font-bold text-gray-900 font-mono">
            Taskify
          </h3>
        </header>
        <div className="main text-gray-900 flex flex-col  ">
          <h2 className="text-3xl font-semibold mb-2">
            <span className="uppercase">Taskify</span> is your ultimate Task
            manager
          </h2>
          <div className="flex gap-2  items-center">
            <div className="">
              <Cube />
            </div>
            <p className="text-sm text-gray-600">
              We provide you the only task manager that makes your life easier.
            </p>
          </div>
          <footer className="highlight-features mt-24">
            <ul className="flex gap-6 flex-col ml-4 ">
              <li>Efficient task management</li>
              <li>Real-time collaboration</li>
              <li>Customizable task categories</li>
              <li>Task reminders and notifications</li>
            </ul>
          </footer>
        </div>
      </div>
      {/* LOGIN LAYOUT */}
      <div
        className={`login  ml-8 p-6 w-2/6 gap-12 flex-col  ${flexClass}`}
      >
        <header className="mb-4 ">
          <h3 className="text-gray-500 text-xl">Hi there,</h3>
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome to Taskify!
          </h2>
        </header>
        {/* EMAIL AND PASWWORD */}
        <main className="text-gray-900">
        <LoginForm/>
        </main>
      </div>
    </div>
  );
}

export default Login;
