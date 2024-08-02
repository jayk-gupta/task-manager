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
    <div className={`h-screen bg-white ${flexClass}`}>
      <div
        className={`project-info flex h-5/6 w-1/4 flex-col gap-6 rounded-xl px-12 text-left`}
      >
        <header className="mb-16 mt-12 flex items-center gap-4 font-mono">
          <lord-icon
            style={{ width: "50px", height: "50px" }}
            trigger="loop"
            colors="primary:#121331,secondary:#ffe"
            stroke="bold"
            load="lazy"
            speed="0.2"
            src="/wired-flat-56-document.json"
          ></lord-icon>
          <h3 className="font-mono text-3xl font-bold text-gray-900">
            Taskify
          </h3>
        </header>
        <div className="main flex flex-col text-gray-900">
          <h2 className="mb-2 text-3xl font-semibold">
            <span className="uppercase">Taskify</span> is your ultimate Task
            manager
          </h2>
          <div className="flex items-center gap-2">
            <div className="">
              <Cube />
            </div>
            <p className="text-sm text-gray-600">
              We provide you the only task manager that makes your life easier.
            </p>
          </div>
          <footer className="highlight-features mt-24">
            <ul className="ml-4 flex flex-col gap-6">
              <li>Efficient task management</li>
              <li>Real-time collaboration</li>
              <li>Customizable task categories</li>
              <li>Task reminders and notifications</li>
            </ul>
          </footer>
        </div>
      </div>
      {/* LOGIN LAYOUT */}
      <div className={`login ml-8 w-2/6 flex-col gap-12 p-6 ${flexClass}`}>
        <header className="mb-4">
          <h3 className="text-xl text-gray-500">Hi there,</h3>
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome to Taskify!
          </h2>
        </header>
        {/* EMAIL AND PASWWORD */}
        <main className="text-gray-900">
          <LoginForm />
        </main>
      </div>
    </div>
  );
}

export default Login;
