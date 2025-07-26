'use client'
import FloatingTextInner from "@/components/floating-text-inner";
import InnerHeader from "@/components/inner-header";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/wrapper";
import { registerSchema } from "@/schemas/register-schema";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "@/store/user-slice";

const RegisterPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

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

    // Store user in Redux and localStorage
    const user = {
      id: Date.now().toString(),
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
    };
    dispatch(updateUser(user));
    localStorage.setItem("user", JSON.stringify(user));

    alert(`Registered as ${form.firstName} ${form.lastName} (${form.email})`);
  };

  return (
    <div className="relative overflow-hidden">
      <FloatingTextInner title="User Register" />
      <InnerHeader title="User Register" />
      <Wrapper>
        <form onSubmit={handleSubmit} className="lg:w-[40%] grid gap-4 mx-auto py-20">
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
          {error && <p className="text-red-500">{error}</p>}
          <Button variant={"secondary"} size={"lg"} type="submit">Register</Button>
        </form>
      </Wrapper>
    </div>
  );
};

export default RegisterPage;