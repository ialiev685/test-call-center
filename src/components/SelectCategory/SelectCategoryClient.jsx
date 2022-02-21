import React, { useState, useEffect, useRef } from "react";

//icon
import { ReactComponent as ArrowIcon } from "./arrowSelect.svg";

export const SelectCategoryClient = (props) => {
  const { value, onChange, data = [], style } = props;

  const [hiddenList, setHiddenList] = useState(true);
  const [currentValue, setCurrentValue] = useState({
    target: { value: 0, text: "Все клиенты" },
  });

  const [indexHover, setIndexHover] = useState(0);

  // const [currentColor, setCurrentColor] = useState(false);

  const wrapperRef = useRef();
  const itemRef = useRef();

  useEffect(() => {
    if (value === "Все клиенты") {
      setCurrentValue({ target: { value: 0, text: "Все клиенты" } });
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
        // name,
      },
    };

    // if (newCurrentValue.target.value !== 0) setCurrentColor(true);
    setCurrentValue(newCurrentValue);
    setHiddenList(true);

    if (typeof onChange === "function") onChange(newCurrentValue.target);
  };

  const listArray = ["Все клиенты"];
  data.forEach(({ contact_name, contact_company }) => {
    const contragent = `${contact_name} | ${contact_company}`;
    const normalizeContragent = contragent.trim();
    if (
      !listArray.includes(normalizeContragent) &&
      normalizeContragent !== "|"
    ) {
      listArray.push(normalizeContragent);
    }
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "relative",

        fontSize: "14px",
        color: "var(--color-text-secondary)",
        ...style,
      }}
    >
      <div
        onClick={handleShowList}
        className="select-header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "110px",
          cursor: "pointer",
        }}
      >
        <span
          data-value={currentValue.target.value}
          style={{
            marginRight: "8px",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
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
          top: "100%",
          right: 0,
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
