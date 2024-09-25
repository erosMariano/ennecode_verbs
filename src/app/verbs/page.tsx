"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Stars from "@/app/images/stars.svg";
import Input from "../components/input";
import ButtonPrimary from "../components/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EnneCode from "@/app/images/enne-code-dark.svg";

import data from "@/app/lib/palaravas.json";

export default function Page() {
  const verbs = data.verbs;
  const randomIndex = Math.floor(Math.random() * verbs.length);

  const [verbActive, setItemActive] = useState(verbs[randomIndex]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Marca que o componente foi montado
    const randomIndex = Math.floor(Math.random() * verbs.length);
    setItemActive(verbs[randomIndex]);
  }, [verbs]);

  if (!isMounted) {
    return null;
  }

  function toastMessage({
    message,
    type,
  }: {
    message: string;
    type: "error" | "success";
  }) {
    if (type === "error") {
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    if (type === "success") {
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const randomIndex = Math.floor(Math.random() * verbs.length);

    const formData = new FormData(e.currentTarget);
    const pastSimple = String(formData.get("past_simple")).toLowerCase();
    const pastParticiple = String(
      formData.get("past_participle")
    ).toLowerCase();
    const translation = String(formData.get("translate")).toLowerCase();

    let hasError = false;
    if (pastSimple !== verbActive.past_simple) {
      console.log("Errou o correto é: ", verbActive.past_simple);
      toastMessage({
        message: `Errou o Past Simple de: ${verbActive.infinitive}`,
        type: "error",
      });
      hasError = true;
    }

    if (pastParticiple !== verbActive.past_participle) {
      console.log("Errou o correto é: ", verbActive.past_participle);
      toastMessage({
        message: `Errou o Past Participle de: ${verbActive.infinitive}`,
        type: "error",
      });
      hasError = true;
    }

    if (translation !== verbActive.translation) {
      console.log("Errou o correto é: ", verbActive.translation);
      toastMessage({
        message: `Errou a tradução: ${verbActive.infinitive}`,
        type: "error",
      });
      hasError = true;
    }

    if (!hasError) {
      toastMessage({ message: `Acertou!`, type: "success" });
      e.currentTarget.reset();
      setItemActive(verbs[randomIndex]);
    }
  }

  return (
    <>
      <ToastContainer />
      <main className="px-4 pt-20  flex flex-col flex-1">
        <div className="flex flex-1 justify-between flex-col">
          <h1 className="caprismo text-white text-4xl flex gap-1 text-center justify-center">
            Now, let&apos;s start! <Image src={Stars} alt="" />
          </h1>
          <p className="mb-10 text-2xl caprismo text-white mt-20">
            Verb:{" "}
            <span className="text-[#FFC62F] underline">
              {verbActive.infinitive}
            </span>
          </p>

          <form onSubmit={handleSubmit} className="flex gap-10 flex-col mb-10">
            <Input id="past_simple" label="Type Past Simple" />
            <Input id="past_participle" label="Type Past Participle" />
            <Input id="translate" label="Type the Translate" />
            <ButtonPrimary label="Submit" type="verifyVerb" />
          </form>
        </div>

        <div className="flex items-end justify-center flex-1 pb-5">
          <Image src={EnneCode} alt="Developed by EnneCode" />
        </div>
      </main>
    </>
  );
}
