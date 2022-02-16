import React, { useState } from "react";
//route
import { Routes, Route, Link, NavLink } from "react-router-dom";

//component
import { IconsNavigation } from "../IconsNavigation";

const styleLink = ({ isActive }) => {
  return {
    fontFamily: "var(--font-family-regular)",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
    width: "100%",
    fontSize: 16,
    lineHeight: 1.5,
    textDecoration: "none",
    color: isActive ? "var(--color-text-white)" : "var(--color-text-gray4)",

    padding: "14px 12px",
    backgroundColor: isActive ? "var(--bg-navigation-link)" : "transparent",
  };
};

export const Navigation = ({ style }) => {
  return (
    <nav
      className="navigation"
      style={{
        ...style,
        backgroundColor: "var(--bg-navigation)",
        width: "240px",
        height: "100%",
      }}
    >
      <div style={{ margin: "20px 0 32px 12px" }}>
        <img src={require("./logo.png")} alt="logo" />
      </div>

      <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
        <li>
          <NavLink to="/total" style={styleLink}>
            {({ isActive }) => (
              <>
                <IconsNavigation
                  name="total"
                  style={{
                    fill: isActive
                      ? "var(--color-text-white)"
                      : "var(--color-text-gray4)",
                  }}
                />
                Итоги
                {isActive && (
                  <span
                    style={{
                      borderRadius: "50%",
                      width: "8px",
                      height: "8px",
                      backgroundColor: "var(--bg-yellow)",
                      boxShadow: "var(--shadow-yellow)",
                      marginLeft: "auto",
                    }}
                  ></span>
                )}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" style={styleLink}>
            {({ isActive }) => (
              <>
                <IconsNavigation
                  name="order"
                  style={{
                    fill: isActive
                      ? "var(--color-text-white)"
                      : "var(--color-text-gray4)",
                  }}
                />
                Заказы
                {isActive && (
                  <span
                    style={{
                      borderRadius: "50%",
                      width: "8px",
                      height: "8px",
                      backgroundColor: "var(--bg-yellow)",
                      boxShadow: "var(--shadow-yellow)",
                      marginLeft: "auto",
                    }}
                  ></span>
                )}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/messages" style={styleLink}>
            {({ isActive }) => (
              <>
                <IconsNavigation
                  name="message"
                  style={{
                    fill: isActive
                      ? "var(--color-text-white)"
                      : "var(--color-text-gray4)",
                  }}
                />
                Сообщения
                {isActive && (
                  <span
                    style={{
                      borderRadius: "50%",
                      width: "8px",
                      height: "8px",
                      backgroundColor: "var(--bg-yellow)",
                      boxShadow: "var(--shadow-yellow)",
                      marginLeft: "auto",
                    }}
                  ></span>
                )}
              </>
            )}
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/calls" style={styleLink}>
            {({ isActive }) => (
              <>
                <IconsNavigation
                  name="call"
                  style={{
                    fill: isActive
                      ? "var(--color-text-white)"
                      : "var(--color-text-gray4)",
                  }}
                />
                Звонки
                {isActive && (
                  <span
                    style={{
                      borderRadius: "50%",
                      width: "8px",
                      height: "8px",
                      backgroundColor: "var(--bg-yellow)",
                      boxShadow: "var(--shadow-yellow)",
                      marginLeft: "auto",
                    }}
                  ></span>
                )}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/counterparties" style={styleLink}>
            {({ isActive }) => (
              <>
                <IconsNavigation
                  name="clients"
                  style={{
                    fill: isActive
                      ? "var(--color-text-white)"
                      : "var(--color-text-gray4)",
                  }}
                />
                Контрагенты
                {isActive && (
                  <span
                    style={{
                      borderRadius: "50%",
                      width: "8px",
                      height: "8px",
                      backgroundColor: "var(--bg-yellow)",
                      boxShadow: "var(--shadow-yellow)",
                      marginLeft: "auto",
                    }}
                  ></span>
                )}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/docs" style={styleLink}>
            {({ isActive }) => (
              <>
                <IconsNavigation
                  name="doc"
                  style={{
                    fill: isActive
                      ? "var(--color-text-white)"
                      : "var(--color-text-gray4)",
                  }}
                />
                Документы
                {isActive && (
                  <span
                    style={{
                      borderRadius: "50%",
                      width: "8px",
                      height: "8px",
                      backgroundColor: "var(--bg-yellow)",
                      boxShadow: "var(--shadow-yellow)",
                      marginLeft: "auto",
                    }}
                  ></span>
                )}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/performers" style={styleLink}>
            {({ isActive }) => (
              <>
                <IconsNavigation
                  name="person"
                  style={{
                    fill: isActive
                      ? "var(--color-text-white)"
                      : "var(--color-text-gray4)",
                  }}
                />
                Исполнители
                {isActive && (
                  <span
                    style={{
                      borderRadius: "50%",
                      width: "8px",
                      height: "8px",
                      backgroundColor: "var(--bg-yellow)",
                      boxShadow: "var(--shadow-yellow)",
                      marginLeft: "auto",
                    }}
                  ></span>
                )}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports" style={styleLink}>
            {({ isActive }) => (
              <>
                <IconsNavigation
                  name="report"
                  style={{
                    fill: isActive
                      ? "var(--color-text-white)"
                      : "var(--color-text-gray4)",
                  }}
                />
                Отчеты
                {isActive && (
                  <span
                    style={{
                      borderRadius: "50%",
                      width: "8px",
                      height: "8px",
                      backgroundColor: "var(--bg-yellow)",
                      boxShadow: "var(--shadow-yellow)",
                      marginLeft: "auto",
                    }}
                  ></span>
                )}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/data" style={styleLink}>
            {({ isActive }) => (
              <>
                <IconsNavigation
                  name="data"
                  style={{
                    fill: isActive
                      ? "var(--color-text-white)"
                      : "var(--color-text-gray4)",
                  }}
                />
                База знаний
                {isActive && (
                  <span
                    style={{
                      borderRadius: "50%",
                      width: "8px",
                      height: "8px",
                      backgroundColor: "var(--bg-yellow)",
                      boxShadow: "var(--shadow-yellow)",
                      marginLeft: "auto",
                    }}
                  ></span>
                )}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" style={styleLink}>
            {({ isActive }) => (
              <>
                <IconsNavigation
                  name="settings"
                  style={{
                    fill: isActive
                      ? "var(--color-text-white)"
                      : "var(--color-text-gray4)",
                  }}
                />
                Настройки
                {isActive && (
                  <span
                    style={{
                      borderRadius: "50%",
                      width: "8px",
                      height: "8px",
                      backgroundColor: "var(--bg-yellow)",
                      boxShadow: "var(--shadow-yellow)",
                      marginLeft: "auto",
                    }}
                  ></span>
                )}
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
