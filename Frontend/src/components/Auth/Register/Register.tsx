import React from "react";
import RegisterForm from "./RegisterForm";
import InfoSection from "./InfoSection";

function Register() {
  return (
    <div className="flex h-screen">
      <div className="flex w-1/2 items-center justify-center">
        <RegisterForm />
      </div>
      <div className="flex w-1/2 p-24 justify-center bg-[#FCFAF8]">
        <InfoSection />
      </div>
    </div>
  );
}

export default Register;
