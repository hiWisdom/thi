
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Products";
import { productData, responsive } from "./Datas/Data";

export default function Services() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      // price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="AboutusCarouselAppConntainer">
      <Carousel showDots={true} responsive={responsive} className="CarouselApp">
        {product}
      </Carousel>
    </div>
  );
}
