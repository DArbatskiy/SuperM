import React, {useContext, useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import {AppContext} from "./AppContext";
import Button from "./Button";

export default function Navbar() {
  const app = useContext(AppContext)
  const cart = app.cart
  const isDarkTheme = app.isDarkTheme
  const cartCount = app.getCartCount()

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        SuperM
      </NavLink>
      <ul>
        <li className="nav-item">
          <Button className="theme-switcher" onClick={app.onThemeClick}>{isDarkTheme?'Dark': 'Light'}</Button>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active" to="/about">
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">
            Cart ({cartCount})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
