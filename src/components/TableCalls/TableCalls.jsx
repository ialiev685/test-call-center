import React from "react";
//style
import "./TableCalls.scss";
//components
import { ReactComponent as BlueDownIcon } from "./icon/arrowDownBlue.svg";
import { ReactComponent as GreenUPIcon } from "./icon/arrowUpGreen.svg";
import { ReactComponent as RedUpIcon } from "./icon/arrowUpRed.svg";
//helpers
import { getNormalizeTime } from "../../helpers/getNormalizeTime";
import { getNormalizeMinute } from "../../helpers/getNormalizeMinute";

//API
import { fetchRecordCall } from "../../services/API";

export const TableCalls = ({ data }) => {
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

      if (name !== "") return `${item.contact_name} ${item.contact_company}`;

      return showInfo;
    }
    if (in_out === "0") {
      return item.to_number;
    }
    return "unknow";
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Тип</th>
          <th>Время</th>
          <th>Сотрудник</th>
          <th>Звонки</th>
          <th>Источник</th>
          <th>Оценка</th>
          <th>Длительность</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item) => {
            return (
              <tr key={item.id}>
                <td
                  className="item__cells"
                  data-v={item.status}
                  data-b={item.in_out}
                >
                  {setTypeCall(item)}
                </td>
                <td className="item__cells">{getNormalizeTime(item.date)}</td>
                <td
                  className="item__cells"
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
                <td>{identifyNumberPhone(item)}</td>
                <td className="item__cells"></td>
                <td
                  className="item__cells"
                  onClick={() => {
                    const record = item.record;
                    const partnership_id = item.partnership_id;
                    fetchRecordCall({ record, partnership_id });
                  }}
                >
                  {item.record !== "" ? "Прослушать" : ""}
                </td>
                <td className="item__cells">{getNormalizeMinute(item.time)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
