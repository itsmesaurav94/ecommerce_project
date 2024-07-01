"use client";
import NavBar from "@/components/navbar/page";
import SideBar from "@/components/sidebar/page";
import React from "react";
import MainSection from "./mainSection";
import LoginSection from "./loginSection";
import { useSelector } from "react-redux";

const page = () => {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />

        <LoginSection />
        <MainSection />
      </div>
    </div>
  );
};

export default page;
