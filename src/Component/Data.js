import {
    useGetAllProductsQuery,
    useGetProductQuery,
  } from "../RTKQuery/apiSlice";
  export const Data = () => {
    const {
      data: allProductsData,
      error,
      isError,
      isLoading,
    } = useGetAllProductsQuery();
    const { data: singleProductData } = useGetProductQuery("iphone");
  
    console.log(allProductsData,"allProductsData");
    console.log(singleProductData);
  
    if (isLoading) return <h1> Loading...</h1>;
    return <div> Data: 
      {singleProductData?.products.map((item)=>{
        return <div>{item.brand}: {item.description}</div>
      })}
       </div>;
  };