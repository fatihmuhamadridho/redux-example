import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProducts } from "../../redux/slices/product.slice";

const HomePage = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.products);

  console.log("productsData", productsData)

  useEffect(() => {
    dispatch(useGetProducts())
  }, [dispatch])

  return (
    <div>
      <h1>ini home page</h1>
      {productsData?.data?.map((product, index) => {
        return (
          <div key={index}>{product.title}</div>
        )
      })}
    </div>
  );
};

export default HomePage;
