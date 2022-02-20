import React, { useState, useEffect, useCallback } from "react";
//components
import {
  SelectCategoryDate,
  SelectCategoryTypeCall,
  SelectCategoryClient,
} from "../SelectCategory";
//helpers
import { apiFilter } from "../../helpers";
//style
import "./FilterBoard.scss";

export const FilterBoard = ({ data, setFilter, filterList }) => {
  const [typeCalls, setTypeCalls] = useState({ value: 1, text: "Все типы" });
  const [date, setDate] = useState({ value: 1, text: "3 дня" });
  const [client, setClient] = useState({ value: 1, text: "Все клиенты" });

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

    setFilter(filterClientCall);
  }, [client, data, date, setFilter, typeCalls]);

  useEffect(() => {
    filteringData();
  }, [filteringData]);

  return (
    <div className="filter">
      <ul className="filter__list">
        <li className="filter__item">
          <SelectCategoryTypeCall
            onChange={setTypeCalls}
            // style={{ position: "absolute", top: "20px", left: 0 }}
          />
        </li>
        <li className="filter__item">
          <SelectCategoryDate
            onChange={setDate}
            // style={{ position: "absolute", top: "20px", left: 0 }}
          />
        </li>
        <li className="filter__item">
          <SelectCategoryClient
            onChange={setClient}
            data={filterList}
            // style={{ position: "absolute", top: "20px", left: 0 }}
          />
        </li>
      </ul>
    </div>
  );
};
