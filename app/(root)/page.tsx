import ProductList from "@/components/products/product-list";

import { getNewestProducts } from "@/lib/actions/product.actions";

const Home = async () => {
  const latestProducts = await getNewestProducts();

  return (
    <>
      <ProductList data={latestProducts} title="Featured Products" />
    </>
  );
};

export default Home;
