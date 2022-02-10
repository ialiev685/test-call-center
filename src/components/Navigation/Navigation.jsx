import React from "react";
//route
import { Routes, Route, Link, NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/total" style={({ isActive }) => {}}>
            Итоги
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" style={({ isActive }) => {}}>
            Заказы
          </NavLink>
        </li>
        <li>
          <NavLink to="/messages" style={({ isActive }) => {}}>
            Сообщения
          </NavLink>
        </li>
        <li>
          <NavLink to="/calls" style={({ isActive }) => {}}>
            Звонки
          </NavLink>
        </li>
        <li>
          <NavLink to="/counterparties" style={({ isActive }) => {}}>
            Контрагенты
          </NavLink>
        </li>
        <li>
          <NavLink to="/docs" style={({ isActive }) => {}}>
            Документы
          </NavLink>
        </li>
        <li>
          <NavLink to="/performers" style={({ isActive }) => {}}>
            Исполнители
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports" style={({ isActive }) => {}}>
            Отчеты
          </NavLink>
        </li>
        <li>
          <NavLink to="/data" style={({ isActive }) => {}}>
            База знаний
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" style={({ isActive }) => {}}>
            Настройки
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
