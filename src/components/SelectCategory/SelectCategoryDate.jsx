import React, { useState, useEffect, useRef } from "react";

//icon
import { ReactComponent as ArrowIcon } from "./arrowSelect.svg";
import { ReactComponent as CalendarIcon } from "./caalendar.svg";

export const SelectCategoryDate = (props) => {
  const { value, onChange, name = "unknow", className = "" } = props;

  const [hiddenList, setHiddenList] = useState(true);
  const [currentValue, setCurrentValue] = useState({
    target: { value: 0, text: "Дата" },
  });

  const [indexHover, setIndexHover] = useState(0);

  const [currentColor, setCurrentColor] = useState(false);

  const wrapperRef = useRef();
  const itemRef = useRef();

  useEffect(() => {
    if (value === "Дата") {
      setCurrentValue({ target: { value: 0, text: "Пол" } });
      setCurrentColor(false);
    }
  }, [value]);

  useEffect(() => {
    if (!hiddenList) {
      document.addEventListener("mousedown", handleClickOutside);

      window.addEventListener("keydown", function handleClick(e) {
        if (e.code === "Escape") {
          setHiddenList(true);
          window.removeEventListener("keydown", handleClick);
        }
      });
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hiddenList]);

  useEffect(() => {
    if (!hiddenList && indexHover) {
      Array(itemRef.current.children.length)
        .fill()
        .forEach(
          (_, index) =>
            (itemRef.current.children[index].style.backgroundColor =
              "var(--bg-table)")
        );

      itemRef.current.children[indexHover - 1].style.backgroundColor =
        "var(--bg-hover)";
    }
  }, [hiddenList, indexHover]);

  const handleClickOutside = (e) => {
    if (!wrapperRef.current.contains(e.target)) {
      setHiddenList(true);
    }
  };

  const handleShowList = (e) => {
    setHiddenList((prevState) => !prevState);
  };

  const handleChoose = (e) => {
    const newCurrentValue = {
      target: {
        value: e.target.dataset.value,
        text: e.target.textContent,
        name,
      },
    };

    if (newCurrentValue.target.value !== 0) setCurrentColor(true);
    setCurrentValue(newCurrentValue);
    setHiddenList(true);

    if (typeof onChange === "function") onChange(newCurrentValue);
  };

  const listArray = ["3 дня", "Неделя", "Месяц", "Год", "Указать даты"];

  return (
    <div ref={wrapperRef} style={{ position: "relative" }}>
      <div
        onClick={handleShowList}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100px",
        }}
      >
        <ArrowIcon style={{ transform: "rotate(-90deg)" }} />
        <CalendarIcon />
        <span data-value={currentValue.target.value}>
          {currentValue.target.text}
        </span>
        <ArrowIcon style={{ transform: "rotate(90deg)" }} />
      </div>

      <div
        style={{
          paddingTop: "5px",
          opacity: hiddenList ? 0 : 1,
          position: "absolute",
          zIndex: 5,
          bottom: 0,
          top: "100%",
          width: "204px",
        }}
      >
        <ul
          ref={itemRef}
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            backgroundColor: "var(--bg-table)",
            boxShadow: "0px 0px 26px rgba(233, 237, 243, 0.8)",
            borderRadius: "4px",
          }}
        >
          {listArray.map((item, index) => {
            return (
              <li
                key={index}
                onMouseEnter={(e) => {
                  setIndexHover(e.target.dataset.value);
                }}
                onMouseLeave={() => setIndexHover("")}
                style={{
                  padding: "8px 20px",
                  cursor: "pointer",
                  borderRadius: "4px",
                  color: "var(--color-text)",
                }}
                data-value={index + 1}
                onClick={handleChoose}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
