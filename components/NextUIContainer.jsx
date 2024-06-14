"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "./Layout";

const NextUIContainer = ({ children }) => {
  return (
    <NextUIProvider>
      <Layout>{children}</Layout>
    </NextUIProvider>
  );
};

export default NextUIContainer;
