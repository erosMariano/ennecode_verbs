"use client";

import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";
import Stars from "@/app/images/stars.svg";
import Input from "../components/input";
import ButtonPrimary from "../components/button";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EnneCode from "@/app/images/enne-code-dark.svg";
import data from "@/app/lib/palaravas.json";
import { toastMessage } from "../lib/toastMessage";
import Header from "../components/header";

interface Verbs {
  infinitive: string;
  past_simple: string;
  past_participle: string;
  translation: string;
}

export default function Page() {
  const verbs = data.verbs;

  // Armazena os verbos preenchidos anteriormente
  const [completedVerbs, setCompletedVerbs] = useState(new Set());
  const [verbActive, setItemActive] = useState<Verbs>({
    infinitive: "",
    past_participle: "",
    past_simple: "",
    translation: "",
  });

  // Função para obter um verbo aleatório que ainda não foi preenchido
  const randomVerb = useCallback(() => {
    const remainingVerbs = verbs.filter(
      (verb) => !completedVerbs.has(verb.infinitive)
    );

    // Se todos os verbos foram completados, limpa o progresso
    if (remainingVerbs.length === 0) {
      toastMessage({
        message: "Você completou todos os verbos!",
        type: "success",
      });
      setCompletedVerbs(new Set()); // Resetar verbos preenchidos
      return verbs[Math.floor(Math.random() * verbs.length)];
    }

    return remainingVerbs[Math.floor(Math.random() * remainingVerbs.length)];
  }, [completedVerbs, verbs]);

  useEffect(() => {
    setItemActive(randomVerb());
  }, [randomVerb]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const pastSimple = String(formData.get("past_simple")).toLowerCase();
      const pastParticiple = String(
        formData.get("past_participle")
      ).toLowerCase();
      const translation = String(formData.get("translate")).toLowerCase();

      let hasError = false;
      if (pastSimple.trim() !== verbActive.past_simple) {
        toastMessage({
          message: `Errou o Past Simple de: ${verbActive.infinitive}`,
          type: "error",
        });
        hasError = true;
      }

      if (pastParticiple.trim() !== verbActive.past_participle) {
        toastMessage({
          message: `Errou o Past Participle de: ${verbActive.infinitive}`,
          type: "error",
        });
        hasError = true;
      }

      if (translation.trim() !== verbActive.translation) {
        toastMessage({
          message: `Errou a tradução: ${verbActive.infinitive}`,
          type: "error",
        });
        hasError = true;
      }

      if (!hasError) {
        toastMessage({ message: `Acertou!`, type: "success" });
        e.currentTarget.reset();
        setCompletedVerbs((prev) => new Set(prev).add(verbActive.infinitive)); // Adiciona o verbo ao Set
        setItemActive(randomVerb());
      }
    },
    [verbActive, randomVerb]
  );
  if (!verbActive) return null;
  return (
    <>
      <Header />
      <ToastContainer />
      <main className="px-4 flex flex-col flex-1 pt-12">
        <p className="text-base poppins text-white mb-6"><span className="text-[#FFC62F]">{completedVerbs.size}</span>/80</p>
        <div className="flex flex-1 justify-between flex-col">
          <h1 className="caprismo text-white text-4xl flex gap-1">
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
