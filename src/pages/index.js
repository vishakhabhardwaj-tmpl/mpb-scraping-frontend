import React from "react";
import dynamic from "next/dynamic";

const UrlInputPage = dynamic(() => import("@/components/UrlInputPage"));

const HomePage = () => {
  return <UrlInputPage />;
};

export default HomePage;
