import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";

export default function Main({ children }) {
  return (
    <div>
      <Title
        title="Box Office"
        subtitle="Are you looking for a movie or an actor?"
      />
      <Navbar />

      {children}
    </div>
  );
}
