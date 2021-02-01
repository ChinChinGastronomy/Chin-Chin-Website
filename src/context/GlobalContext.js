import React, { createContext, useState, useEffect, useCallback } from "react";
import Client from "../contentful";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [menues, setMenues] = useState([]);
  const [events, setEvents] = useState([]);
  const [sections, setSections] = useState([]);
  const [tradingHours, setTradingHours] = useState([]);

  let lengthEvents = events.length;

  //get menues

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

  //get Events

  const getEvents = useCallback(async () => {
    try {
      let event = await Client.getEntries({
        content_type: "pdfMenu",
      });

      let dataEvent = formatEvent(event.items);

      return setEvents(dataEvent);
    } catch (error) {
      console.log(error);
    }
  }, [setEvents]);

  const formatEvent = (items) => {
    let tempEvent = items.map((item) => {
      let id = item.sys.id;

      let pdf = item.fields.pdf ? item.fields.pdf.fields.file.url : null;
      let imageEvent = item.fields.picture.fields.file.url;
      let eventz = { ...item.fields, id, pdf, imageEvent };

      return eventz;
    });

    return tempEvent;
  };

  //get Sections

  const getSections = useCallback(async () => {
    try {
      let section = await Client.getEntries({
        content_type: "fiveCoursePic",
      });

      let dataSection = formatSection(section.items);

      return setSections(dataSection);
    } catch (error) {
      console.log(error);
    }
  }, [setSections]);

  const formatSection = (items) => {
    let tempSection = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.dishImg.map((img) => img.fields.file.url);

      let title = item.fields.title;
      let description = item.fields.description;
      let menuPdf = item.fields.menuPdf.fields.file.url;

      let sectionz = { title, description, id, images, menuPdf };

      return sectionz;
    });

    return tempSection;
  };

  //get Trading hours
  const getTradingHours = useCallback(async () => {
    try {
      let responseTradingHours = await Client.getEntries({
        content_type: "tradingHours",
      });

      let tradingHours = formatDataHours(responseTradingHours.items);

      return setTradingHours(tradingHours);
    } catch (error) {
      console.log(error);
    }
  }, [setTradingHours]);

  const formatDataHours = (items) => {
    let tempHours = items.map((item) => {
      let id = item.sys.id;
      let createdAt = item.sys.createdAt;
      let hours = { ...item.fields, id, createdAt };

      return hours;
    });

    return tempHours;
  };

  useEffect(() => {
    getData();
    getEvents();
    getSections();
    getTradingHours();
  }, [getData, getEvents, getSections, getTradingHours]);

  return (
    <GlobalContext.Provider
      value={{ menues, events, sections, lengthEvents, tradingHours }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
