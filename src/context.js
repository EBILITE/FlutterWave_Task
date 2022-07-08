import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
const url = "https://techcrunch.com/wp-json/wp/v2/posts";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const response = await axios.get(url);
      const data = response.data;
      setList([...list, ...data]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <AppContext.Provider value={{ loading, list }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
