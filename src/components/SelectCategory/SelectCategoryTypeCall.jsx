import React, { useState, useEffect, useRef } from "react";
//icon
import { ReactComponent as ArrowIcon } from "./arrowSelect.svg";
//style
import "./SelectCategory.scss";

export const SelectCategoryTypeCall = (props) => {
  const { value, onChange, style } = props;

  const [hiddenList, setHiddenList] = useState(true);
  const [currentValue, setCurrentValue] = useState({
    target: { value: 1, text: "Все типы" },
  });

  const [indexHover, setIndexHover] = useState(0);

  // const [currentColor, setCurrentColor] = useState(false);

  const wrapperRef = useRef();
  const itemRef = useRef();

  useEffect(() => {
    if (value === "Все типы") {
      setCurrentValue({ target: { value: 1, text: "Все типы" } });
      // setCurrentColor(false);
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

  //сброс выделение цветом при ховере  категории в меню
  useEffect(() => {
    if (!hiddenList && indexHover) {
      Array(itemRef.current.children.length)
        .fill()
        .forEach((_, index) => {
          itemRef.current.children[index].style.backgroundColor =
            "var(--bg-table)";
          itemRef.current.children[index].style.color =
            "var(--color-text-secondary)";
        });

      itemRef.current.children[indexHover - 1].style.backgroundColor =
        "var(--bg-hover)";
      itemRef.current.children[indexHover - 1].style.color =
        "var(--color-text-blue2)";
    }
  }, [hiddenList, indexHover]);

  //сброс и выделение цветом выбранной категории в меню
  // useEffect(() => {
  //   if (!hiddenList) {
  //     Array(itemRef.current.children.length)
  //       .fill()
  //       .forEach((_, index) => {
  //         const textContent = itemRef.current.children[index].textContent;
  //         itemRef.current.children[index].style.color =
  //           "var(--color-text-primary)";

  //         if (textContent === currentValue.target.text) {
  //           itemRef.current.children[index].style.color =
  //             "var(--color-text-blue2)";
  //         }
  //       });
  //   }
  // }, [currentValue.target.text, hiddenList]);

  const handleClickOutside = (e) => {
    if (!wrapperRef.current.contains(e.target)) {
      setHiddenList(true);
    }
  };

  const handleShowList = (e) => {
    console.log(e);
    setHiddenList((prevState) => !prevState);
  };

  const handleChoose = (e) => {
    const newCurrentValue = {
      target: {
        value: e.target.dataset.value,
        text: e.target.textContent,
        // name,
      },
    };

    // if (newCurrentValue.target.value !== 0) setCurrentColor(true);
    setCurrentValue(newCurrentValue);
    setHiddenList(true);

    if (typeof onChange === "function") onChange(newCurrentValue.target);
  };

  //список
  const listArray = ["Все типы", "Исходящие", "Входящие"];

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "relative",
        ...style,
        minWidth: "80px",
        fontSize: "14px",
        color: "var(--color-text-secondary)",
      }}
    >
      <div
        onClick={handleShowList}
        className="select-header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <span
          data-value={currentValue.target.value}
          style={{ marginRight: "8px" }}
        >
          {currentValue.target.text}
        </span>
        <ArrowIcon
          style={{
            transform: hiddenList ? "rotate(180deg)" : "rotate(0deg)",
            fill: "currentColor",
          }}
        />
      </div>

      <div
        style={{
          paddingTop: "5px",
          opacity: hiddenList ? 0 : 1,
          position: "absolute",
          zIndex: 5,
          bottom: 0,
          right: 0,
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
            pointerEvents: hiddenList === true ? "none" : "fill",
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
                  color: "var(--color-text-primary)",
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
