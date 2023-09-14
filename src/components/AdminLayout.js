import React from "react";
// import Footer from "./Footer";
import AdminHeader from "./AdminHeader";
const Layout = ({ children }) => {
  return (
    <>
      <AdminHeader />
      <div>{children}</div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
