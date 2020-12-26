import React, { createContext, useState, useEffect } from "react";
import Client from "../contentful";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [menues, setMenues] = useState([]);

  const getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "menu",
      });

      let data = formatData(response.items);

      return setMenues(data);
    } catch (error) {
      console.log(error);
    }
  };

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
  }, []);

  return (
    <GlobalContext.Provider value={{ menues }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
