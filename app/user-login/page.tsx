'use client'
import FloatingTextInner from "@/components/floating-text-inner";
import InnerHeader from "@/components/inner-header";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/wrapper";
import { loginSchema } from "@/schemas/login-schema";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "@/store/user-slice";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    // Get user from localStorage
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      setError("No registered user found. Please register first.");
      return;
    }
    const user = JSON.parse(storedUser);

    if (user.email !== email || user.password !== password) {
      setError("Invalid email or password.");
      return;
    }

    setError("");
    dispatch(updateUser(user));
    alert(`Logged in as ${user.name} (${user.email})`);
    // Optionally, redirect user after login
  };

  return (
    <div className="relative overflow-hidden">
      <FloatingTextInner title="User Login" />
      <InnerHeader title="User Login" />
      <Wrapper>
        <form onSubmit={handleSubmit} className="lg:w-[40%] grid gap-4 mx-auto py-20">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="input-box"
            required
            placeholder="Enter your email"
          />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="input-box"
            required
            placeholder="Enter your password"
          />
          {error && <div className="text-red-500">{error}</div>}
          <p className="text-gray-400">
            Dont have an account?
            <Link className="ml-4 text-[#7fa68d] font-semibold" href='/user-register'>Register</Link>
          </p>
          <Button variant={"secondary"} size={"lg"} type="submit">Login</Button>
        </form>
      </Wrapper>
    </div>
  );
};

export default LoginPage;