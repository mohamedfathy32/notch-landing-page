import { products } from "../data/data";
import CardProduct from "./CardProduct";

const Product = () => {
  return (
    <section id="Product" className="py-8 bg-blue-50">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">Our Product</h2>

      <div className="flex justify-center gap-12 flex-wrap mx-4 md:mx-0">
        {products.map((product, index) => (
          <CardProduct
            key={index}
            title={product.title}
            image={product.image}
            desc={product.desc}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Product;
