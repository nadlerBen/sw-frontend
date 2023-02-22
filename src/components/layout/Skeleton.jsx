import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Skeleton = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Skeleton;
