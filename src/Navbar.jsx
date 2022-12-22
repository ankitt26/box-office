import React from "react";
import { useLocation } from "react-router-dom";
import { NavList, LinkStyled } from "./Navs.styled";

export default function Navbar() {
  const Linkk = [
    { to: "/", text: "home" },
    { to: "/Starred", text: "Starred" },
  ];

  const location = useLocation();

  return (
    <div>
      <NavList>
        {Linkk.map((item) => (
          <li key={item.to}>
            <LinkStyled
              to={item.to}
              className={item.to === location.pathname ? "active" : ""}
            >
              {item.text}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
}
