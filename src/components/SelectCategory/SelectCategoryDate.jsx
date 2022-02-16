import React, { useState, useEffect, useRef } from "react";

//icon
import { ReactComponent as ArrowIcon } from "./arrowSelect.svg";
import { ReactComponent as CalendarIcon } from "./caalendar.svg";
//components
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const inputDateProps = {
  style: {
    backgroundColor: "white",
    border: "none",
    outline: "none",
    width: "75px",
    height: "28px",
    fontSize: "14px",
    color: "var(--color-text)",
    borderBottom: "1px solid var(--color-text-primary)",
  },
};

export const SelectCategoryDate = (props) => {
  const { value, onChange, name = "unknow", style } = props;

  const [hiddenList, setHiddenList] = useState(true);
  const [currentValue, setCurrentValue] = useState({
    target: { value: 1, text: "3 дня" },
  });

  const [currentValueDateFrom, setCurrentValueDateFrom] = useState("");
  const [currentValueDateTo, setCurrentValueDateTo] = useState("");

  const [indexHover, setIndexHover] = useState(0);

  const [currentColor, setCurrentColor] = useState(false);

  const wrapperRef = useRef();
  const itemRef = useRef();

  useEffect(() => {
    if (value === "3 дня") {
      setCurrentValue({ target: { value: 1, text: "3 дня" } });
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

  //сброс выделение цветом при ховере  категории в меню
  useEffect(() => {
    if (!hiddenList && indexHover) {
      Array(itemRef.current.children.length)
        .fill()
        .forEach((_, index) => {
          itemRef.current.children[index].style.backgroundColor =
            "var(--bg-table)";
        });

      itemRef.current.children[indexHover - 1].style.backgroundColor =
        "var(--bg-hover)";
    }
  }, [hiddenList, indexHover]);

  //сброс и выделение цветом выбранной категории в меню
  useEffect(() => {
    if (!hiddenList) {
      Array(itemRef.current.children.length)
        .fill()
        .forEach((_, index) => {
          const textContent = itemRef.current.children[index].textContent;
          itemRef.current.children[index].style.color =
            "var(--color-text-primary)";

          if (textContent === currentValue.target.text) {
            itemRef.current.children[index].style.color =
              "var(--color-text-blue2)";
          }
        });
    }
  }, [currentValue.target.text, hiddenList]);

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

    if (
      e.target.textContent === "Укажите дату" &&
      (currentValueDateFrom === "" || currentValueDateTo === "")
    ) {
      return;
    }

    if (newCurrentValue.target.value !== 0) setCurrentColor(true);
    setCurrentValue(newCurrentValue);
    setHiddenList(true);

    if (
      e.target.textContent === "Укажите дату" &&
      currentValueDateFrom !== "" &&
      currentValueDateTo !== ""
    ) {
      const periodDateSend = {
        valueOne: currentValueDateFrom,
        valueTwo: currentValueDateTo,
        text: e.target.textContent,
      };
      onChange(periodDateSend);
      return;
    }
    if (typeof onChange === "function") onChange(newCurrentValue.target);
  };

  const handleChooseDate = (e) => {
    const newCurrentValue = {
      target: {
        value: e.target.value,
        name: e.target.name,
      },
    };

    const { value } = newCurrentValue.target;
    if (e.target.name === "date1") setCurrentValueDateFrom(value);
    if (e.target.name === "date2") setCurrentValueDateTo(value);
  };

  //список
  const listArray = ["3 дня", "Неделя", "Месяц", "Год", "Укажите дату"];

  return (
    <div ref={wrapperRef} style={{ position: "relative", ...style }}>
      <div
        onClick={handleShowList}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minWidth: "130px",
          cursor: "pointer",
        }}
      >
        <ArrowIcon style={{ transform: "rotate(-90deg)" }} />
        <CalendarIcon />
        <span
          data-value={currentValue.target.value}
          style={{ color: "var(--color-text-blue2)" }}
        >
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
          <li
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 10px 8px 20px",
              color: "var(--color-text-primary)",
            }}
          >
            <Datetime
              dateFormat="DD.MM.YYYY"
              timeFormat={false}
              initialValue={currentValueDateFrom}
              closeOnSelect={true}
              inputProps={inputDateProps}
              onChange={(value) => {
                const e = {
                  target: {
                    value: value._d,
                    // id: "date",
                    name: "date1",
                  },
                };
                handleChooseDate(e);
              }}
            />
            -
            <Datetime
              dateFormat="DD.MM.YYYY"
              timeFormat={false}
              initialValue={currentValueDateTo}
              closeOnSelect={true}
              inputProps={inputDateProps}
              onChange={(value) => {
                const e = {
                  target: {
                    value: value._d,
                    // id: "date",
                    name: "date2",
                  },
                };
                handleChooseDate(e);
              }}
            />
            <CalendarIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};
