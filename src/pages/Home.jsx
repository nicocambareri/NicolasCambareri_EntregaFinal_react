// import { useEffect } from "react";
import ItemListContainer from "../components/ItemListContainer";
import { useGetProducts } from "../hooks/useProducts";
export const Home = () => {
  const { productsData } = useGetProducts('products');


  return <ItemListContainer productsData={productsData} />;
};