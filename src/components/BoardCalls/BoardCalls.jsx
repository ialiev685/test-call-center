import React, { useEffect, useCallback, useState } from "react";
//API
import { fetchListCalls } from "../../services/API";

export const BoardCalls = () => {
  const [data, setData] = useState("");

  const fetchListData = useCallback(async () => {
    const result = await fetchListCalls();
    if (result?.data) {
      const { data } = result;

      // setData(data);
      console.log(data);
    }
  }, []);

  useEffect(() => {
    fetchListData();
  }, [fetchListData]);

  return data;
};
