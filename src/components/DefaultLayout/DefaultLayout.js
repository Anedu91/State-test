import React from "react";

function DefaultLayout({ children }) {
  return (
    <>
      <h1 className="text-6xl my-5 text-center">This is a state test</h1>
      <div className="container grid mx-auto grid-cols-3 gap-4 pt-10">
        {children}
      </div>
    </>
  );
}

export default DefaultLayout;
