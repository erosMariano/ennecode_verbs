"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../input";
import ButtonPrimary from "../button";

const schema = z.object({
  nickname: z.string().min(3, "Nickname deve ter pelo menos 3 caracteres"),
  email: z.string().email("Formato de email inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

type FormData = z.infer<typeof schema>;

export default function Cadastro() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [loading, setLoading] = useState(false)

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    try {
      const response = await fetch("/api/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar dados do formulário");
      }
      reset()
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }finally{
      setLoading(false)
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-5"
    >
      <Input
        id="nickname"
        label="Nickname"
        {...register("nickname")}
        error={errors.nickname?.message}
      />

      <Input
        id="email"
        label="Email"
        {...register("email")}
        error={errors.email?.message}
      />
      <Input
        id="password"
        label="Password"
        type="password"
        {...register("password")}
        error={errors.password?.message}
      />
      <ButtonPrimary loading={loading} label="Register" type="submit" />
    </form>
  );
}
