import ItemListContainer from "../components/ItemListContainer";
import { useGetProducts } from "../hooks/useProducs";
export const Home = () => {
  const { productsData } = useGetProducts(15);

  return <ItemListContainer productsData={productsData} />;
};
