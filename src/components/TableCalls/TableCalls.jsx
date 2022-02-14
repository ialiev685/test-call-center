import React, { useState, useEffect, useCallback } from "react";
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
import { getNormalizeTime, getNormalizeMinute, apiFilter } from "../../helpers";

export const TableCalls = ({ data }) => {
  const [typeCalls, setTypeCalls] = useState({ value: 1, text: "Все" });
  const [date, setDate] = useState({ value: 1, text: "3 дня" });
  const [client, setClient] = useState({ value: 1, text: "Все" });

  const [filterList, seFlterList] = useState([]);

  const filteringData = useCallback(() => {
    const filterTypeCalls = apiFilter.getListTypeCalls(typeCalls, data);

    const filterPeriodCalls = apiFilter.getPeriodListCalls(
      date,
      filterTypeCalls
    );

    const filterClientCall = apiFilter.getCurrentClienCall(
      client,
      filterPeriodCalls
    );

    seFlterList(filterClientCall);
  }, [client, data, date, typeCalls]);

  useEffect(() => {
    filteringData();
  }, [filteringData]);

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
      const name = item.contact_name || item.contact_company;
      const number = item.to_number;
      const showInfo = name || number;

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
    return "unknow";
  };

  console.log("filter", filterList);
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
            <th className="table__head-person">Сотрудник</th>
            <th className="table__head-calls">
              <SelectCategoryClient onChange={setClient} data={filterList} />
              Звонки
            </th>
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
