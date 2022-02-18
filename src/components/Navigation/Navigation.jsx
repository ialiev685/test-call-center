import React from "react";
//route
import { NavLink } from "react-router-dom";

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

    padding: "14px",
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
                    width: "22px",
                    height: "12px",
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
                    width: "23px",
                    height: "13px",
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
                    width: "20px",
                    height: "16px",
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
                    width: "18px",
                    height: "18px",
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
                    width: "20px",
                    height: "14px",
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
                    width: "16px",
                    height: "20px",
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
                    width: "16px",
                    height: "16px",
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
                    width: "20px",
                    height: "19px",
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
                    width: "18px",
                    height: "21px",
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
                    width: "19px",
                    height: "20px",
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
