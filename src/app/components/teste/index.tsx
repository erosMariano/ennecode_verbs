
"use client";
import React, { useEffect, useState } from "react";
type Props = {
  verbs: {
    infinitive: string;
    past_simple: string;
    past_participle: string;
    translation: string;
  }[];
};

function PageVerbs({ verbs }: Props) {

  const [itemActive, setItemActive] = useState({
    infinitive: "",
    past_simple: "",
    past_participle: "",
    translation: "",
  });
  const [isMounted, setIsMounted] = useState(false); // Verifica se o componente está montado

  useEffect(() => {
    setIsMounted(true); // Marca que o componente foi montado
    const randomIndex = Math.floor(Math.random() * verbs.length);
    setItemActive(verbs[randomIndex]);
  }, [verbs]);

  if (!isMounted) {
    // Exibe algo enquanto o componente ainda está montando
    return null; // ou um loader/spinner
  }

  function validadeWord(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const pastSimple = String(formData.get("pastSimple")).toLowerCase();
    const pastParticiple = String(formData.get("pastParticiple")).toLowerCase();
    const translation = String(formData.get("translation")).toLowerCase();

    let hasError = false;
    if (pastSimple !== itemActive.past_simple) {
      console.log("Errou o correto é: ", itemActive.past_simple);
      hasError = true;
    }

    if (pastParticiple !== itemActive.past_participle) {
      console.log("Errou o correto é: ", itemActive.past_participle);
      hasError = true;
    }

    if (translation !== itemActive.translation) {
      console.log("Errou o correto é: ", itemActive.translation);
      hasError = true;
    }

    if (!hasError) {
      console.log("ACERTOU!");
    }
  }

  return (
    <div className="px-4">
      * <h1>{itemActive?.infinitive}</h1>
      <form onSubmit={validadeWord}>
        <br />
        <p>Digite o Past Simple</p>
        <input type="text" name="pastSimple" className="text-black" />
        <br />
        <br />
        <p>Digite o Past Participle</p>
        <input type="text" name="pastParticiple" className="text-black" />
        <br />
        <br />
        <p>Digite a Tradução</p>
        <input type="text" name="translation" className="text-black" />

        <br />
        <button className="mt-5 w-full h-14 bg-gray-300 text-black">
          Enviar
        </button>
      </form> 
    </div>
  );
}

export default PageVerbs;
