import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: {}
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  let [loading, setLoading] = useState(false);

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
