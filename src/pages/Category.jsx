import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import { useGetProductsByCategory } from "../hooks/useProducs";

export const Category = () => {
  const { id } = useParams();

  const { productsData } = useGetProductsByCategory(id);

  return <ItemListContainer productsData={productsData} />;
};