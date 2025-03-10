import React, { useState } from "react";
import logo from '../../assets/icons/logo.svg';
import styles from "./styles/header.module.scss";

const navLinks = [
  { name: "Цифры", href: "#" },
  { name: "Сделки онлайн", href: "#" },
  { name: "о компании", href: "#" },
  { name: "как начать", href: "#" },
  { name: "тарифы", href: "#" },
  { name: "отзывы", href: "#" },
  { name: "FAQ", href: "#" }
];

const buttons = [
  { name: "вход", action: () => {} },
  { name: "регистрация", action: () => {} }
];

const Navigation = ({ className }) => (
  <nav className={className}>
    <ul>
      {navLinks.map((link, index) => (
        <li key={index}>
          <a href={link.href}>{link.name}</a>
        </li>
      ))}
    </ul>
  </nav>
);

const Buttons = ({ className, reverse = false }) => (
  <div className={className}>
    {(reverse ? [...buttons].reverse() : buttons).map((btn, index) => (
      <button key={index} onClick={btn.action}>{btn.name}</button>
    ))}
  </div>
);

export const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <div className={styles.header__logo}>
            <img src={logo} alt="TradeBlade" />
          </div>

          <Navigation className={styles.header__navigation} />
          <Buttons className={styles.header__buttons} />

          <div className={styles.header__burger} onClick={() => setIsBurgerOpen(true)}>
            <div className={styles.header__burger__line}></div>
            <div className={styles.header__burger__line}></div>
            <div className={styles.header__burger__line}></div>
          </div>
          <div
            className={`${styles.header__burger__navigation} ${isBurgerOpen ? styles.header__burger__navigation__opened : ""}`}>
            <div className={styles.header__burger__navigation__close} onClick={() => setIsBurgerOpen(false)}>
              <div className={styles.header__burger__navigation__close__line}></div>
              <div className={styles.header__burger__navigation__close__line}></div>
            </div>

            <Navigation className={styles.header__burger__navigation__links}/>
            <Buttons className={styles.header__burger__navigation__buttons} reverse/>
          </div>
        </div>
      </div>
    </div>
  );
};
