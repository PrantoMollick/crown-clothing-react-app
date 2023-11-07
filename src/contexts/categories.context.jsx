import { createContext, useState, useEffect } from "react";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments
} from "../utils/firebase/firebase.utils";
import SHOP_DATA from "../shop-data";

export const CategoriesContext = createContext({
  categoriesMap: {}
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  let [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      try {
        setLoading(true);
        const categoriesMap = await getCategoriesAndDocuments();
        setCategoriesMap(categoriesMap);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap, loading };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
