import sampleData from "@/db/sample-data";
import ProductList from "@/components/products/product-list";

const Home = () => {
  console.log(sampleData);

  return (
    <>
      <ProductList data={sampleData.products} title="Featured Products" limit={4} />
    </>
  );
};

export default Home;
