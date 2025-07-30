"use client";
import FloatingTextInner from "@/components/floating-text-inner";
import InnerHeader from "@/components/inner-header";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/wrapper";
import { registerSchema } from "@/schemas/register-schema";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { validationMessages } from "@/constants/validation-messages";
import ErrorMessage from "@/components/error-message";

const RegisterPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = registerSchema.safeParse(form);
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    setError(null);

    const newUser = {
      id: Date.now().toString(),
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      password: form.password, // Note: ideally hashed
    };

    localStorage.setItem("user", JSON.stringify(newUser));

    toast.success(
      validationMessages.registerSuccess({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
      })
    );

    setTimeout(() => {
      router.push("/user-login");
    }, 1200);
  };

  return (
    <div className="relative overflow-hidden">
      <FloatingTextInner title="User Register" />
      <InnerHeader title="User Register" />
      <Wrapper>
        <form
          onSubmit={handleSubmit}
          className="lg:w-[40%] grid gap-4 mx-auto py-20"
        >
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            type="text"
            value={form.firstName}
            onChange={handleChange}
            className="input-box"
            required
            placeholder="Enter your first name"
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            type="text"
            value={form.lastName}
            onChange={handleChange}
            className="input-box"
            required
            placeholder="Enter your last name"
          />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="input-box"
            required
            placeholder="Enter your email"
          />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            className="input-box"
            required
            placeholder="Enter your password"
          />
          {error && <ErrorMessage msg={error} />}
          <Button variant={"secondary"} size={"lg"} type="submit">
            Register
          </Button>
        </form>
      </Wrapper>
    </div>
  );
};

export default RegisterPage;