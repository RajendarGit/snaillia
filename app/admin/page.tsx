"use client";
import React from "react";
import Wrapper from "@/components/wrapper";
import InnerHeader from "@/components/inner-header";

const AdminPage = () => {
  return (
    <>
      <InnerHeader title="Admin Page" />
      <div className="py-10 lg:py-20 bg-gray-50 min-h-screen">
        <Wrapper>
          <h2 className="text-2xl font-semibold mb-4">Welcome to the Admin Dashboard</h2>
          <p className="text-gray-600">
            This is a placeholder for the admin page content. You can add your admin components and logic here.
          </p>
        </Wrapper>
      </div>
    </>
  );
};

export default AdminPage;