import React, { useEffect, useCallback, useState } from "react";
//API
import { fetchListCalls } from "../../services/API";
//components
import { TableCalls } from "../TableCalls";

export const BoardCalls = () => {
  const [data, setData] = useState([]);

  const fetchListData = useCallback(async () => {
    const result = await fetchListCalls();
    if (result?.data) {
      const { data } = result;

      setData(data);
    }
  }, []);

  useEffect(() => {
    fetchListData();
  }, [fetchListData]);

  return <TableCalls data={data} />;
};
