import React, { useEffect } from "react";
//style
import "./TableCalls.scss";
//components
import { ReactComponent as BlueDownIcon } from "./icon/arrowDownBlue.svg";
import { ReactComponent as GreenUPIcon } from "./icon/arrowUpGreen.svg";
import { ReactComponent as RedUpIcon } from "./icon/arrowUpRed.svg";
import { ButtonDetect } from "../ButtonDetect";
import {
  SelectCategoryDate,
  SelectCategoryTypeCall,
  SelectCategoryClient,
} from "../SelectCategory";

//helpers
import { getNormalizeTime } from "../../helpers/getNormalizeTime";
import { getNormalizeMinute } from "../../helpers/getNormalizeMinute";
import { useState } from "react/cjs/react.development";

export const TableCalls = ({ data }) => {
  const [date, setDate] = useState({ value: 1, text: "3 дня" });
  const [typeCalls, setTypeCalls] = useState("все");
  const [client, setClient] = useState();

  const [filterList, seFlterList] = useState([]);

  useEffect(() => {
    const filteredDate = data.filter(({ date_notime }) => {
      const dateCall = new Date(date_notime);
      const dateNow = new Date();
      const diffDate = Math.ceil((dateNow - dateCall) / (1000 * 3600 * 24));
      return diffDate <= 3;
    });

    const filterCalls = filteredDate.filter(({ in_out }) => in_out === "1");

    const filterPerson = filterCalls.filter(
      ({ from_number }) => from_number === "799**93**"
    );

    seFlterList(filterPerson);
  }, [data]);

  const setTypeCall = (item) => {
    const { status, in_out } = item;

    if (status === "Не дозвонился" && in_out === "0") return <RedUpIcon />;

    if (status === "Дозвонился" && in_out === "0") return <GreenUPIcon />;

    if (status === "Дозвонился" && in_out === "1") return <BlueDownIcon />;

    if (status === "Не дозвонился" && in_out === "1")
      return <RedUpIcon className="iconRedDown" />;

    return "unknow";
  };

  const identifyNumberPhone = (item) => {
    const { in_out } = item;

    if (in_out === "1") {
      const name = item.contact_name || item.contact_company;
      const number = item.from_number;
      const showInfo = name || number;

      // if (name !== "") return `${item.contact_name} ${item.contact_company}`;
      if (name !== "")
        return (
          <>
            <span style={{ marginBottom: "6px" }}>{item.contact_name}</span>
            <span style={{ color: "var(--color-text-secondary)" }}>
              {item.contact_company}
            </span>
          </>
        );

      return showInfo;
    }
    if (in_out === "0") {
      return item.to_number;
    }
    return "unknow";
  };

  return (
    <div className="wrapper-table">
      <table className="table">
        <thead>
          <tr className="table__item">
            <th className="table__head-space"></th>
            <th className="table__head-type">
              <SelectCategoryTypeCall onChange={setTypeCalls} />
              Тип
            </th>
            <th className="table__head-time">
              <SelectCategoryDate onChange={setDate} />
              Время
            </th>
            <th className="table__head-person">
              <SelectCategoryClient onChange={setClient} data={data} />
              Сотрудник
            </th>
            <th className="table__head-calls">Звонки</th>
            <th className="table__head-source">Источник</th>
            <th className="table__head-score">Оценка</th>
            <th className="table__head-duration">Длительность</th>
          </tr>
        </thead>
        <tbody>
          {filterList &&
            filterList.map((item) => {
              return (
                <tr key={item.id} className="table__item">
                  <td> </td>
                  <td data-v={item.status} data-b={item.in_out}>
                    {setTypeCall(item)}
                  </td>
                  <td>{getNormalizeTime(item.date)}</td>
                  <td
                    data-id={item.person_id}
                    data-name={item.person_name}
                    data-surname={item.person_surname}
                  >
                    <img
                      src={
                        item.person_avatar ||
                        "https://lk.skilla.ru/img/noavatar.jpg"
                      }
                      alt="аватар"
                      width="32"
                      height="32"
                    />
                  </td>
                  <td className="table__nameNumber">
                    {identifyNumberPhone(item)}
                  </td>
                  <td>-</td>
                  <td>
                    {item.record !== "" ? <ButtonDetect item={item} /> : ""}
                  </td>
                  <td>{getNormalizeMinute(item.time)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
