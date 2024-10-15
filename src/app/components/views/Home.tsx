import React from "react";
import Input from "../input";
import ButtonPrimary from "../button";
export default function LoginHome() {
  return (
    <div className="w-full flex flex-col gap-5">
        <Input id="nickname" label="Nickname"/>
        <Input id="passowrd" label="Password"/>
        <ButtonPrimary label="Get Started" type="started"/>
    </div>
  );
}
