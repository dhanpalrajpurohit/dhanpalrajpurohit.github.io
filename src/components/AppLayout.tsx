import React from "react";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
