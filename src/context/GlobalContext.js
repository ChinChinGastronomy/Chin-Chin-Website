import React, { createContext, useState, useEffect, useCallback } from "react";
import Client from "../contentful";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [menues, setMenues] = useState([]);

  const getData = useCallback(async () => {
    try {
      let response = await Client.getEntries({
        content_type: "menu",
      });

      let data = formatData(response.items);

      return setMenues(data);
    } catch (error) {
      console.log(error);
    }
  }, [setMenues]);

  const formatData = (items) => {
    let tempMenues = items.map((item) => {
      let id = item.sys.id;

      let menu = { ...item.fields, id };

      return menu;
    });

    return tempMenues;
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <GlobalContext.Provider value={{ menues }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
