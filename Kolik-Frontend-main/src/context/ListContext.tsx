
import React, { createContext, useContext, useState, ReactNode } from "react";

export type ListItem = {
  id: number;
  name: string;
  quantity: number;
  price?: string;
  store?: string;
  image?: string;
};

type ListContextType = {
  listItems: ListItem[];
  addToList: (item: ListItem) => void;
  removeFromList: (id: number) => void;
};

const ListContext = createContext<ListContextType | undefined>(undefined);

export const useList = () => {
  const context = useContext(ListContext);
  if (!context) throw new Error("useList must be used within a ListProvider");
  return context;
};

export const ListProvider = ({ children }: { children: ReactNode }) => {
  const [listItems, setListItems] = useState<ListItem[]>([]);

  const addToList = (item: ListItem) => {
    setListItems((prev) => [...prev, item]);
  };

  const removeFromList = (id: number) => {
    setListItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ListContext.Provider value={{ listItems, addToList, removeFromList }}>
      {children}
    </ListContext.Provider>
  );
};
