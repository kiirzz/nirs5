import React, { createContext } from "react";

const ListContext = createContext();

export const ListProvider = ({children}) => {
  const [list, setList] = useState([]);

  
  return(
      <ListContext.Provider value={{  }}>
          {children}
      </ListContext.Provider>
  );
};

export const useList = () => {
  return useContext(ListContext);
}