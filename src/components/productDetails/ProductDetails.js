import "./productDetails.scss";
import Search from "../../assets/cart.svg";
import Star from "../../assets/star.svg";
import StarHalf from "../../assets/starHalf.svg";
import StarPlain from "../../assets/starPlain.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import useFetch from "../../hooks/useFetch";

const ProductDetails = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  );

  return (
    <div className="productDetails">
      <div className="productDetailsContainer">
        <Swiper slidesPerView={1} navigation modules={[Navigation]} spaceBetween={5}>
          {data?.map((item) => (
            <SwiperSlide className="productDetailsCard">
              <div className="left">
                <div className="title">{item.title}</div>
                <p>{(item.description).slice(0,70)}{item.description.length > 50 ? ".." : ""}.</p>
                <div className="images">
                  <img src={item.image} alt="product_image" />
                  <img src={item.image} alt="product_image" />
                  <img src={item.image} alt="product_image" />
                </div>
              </div>
              <div className="center">
                <div className="image_container">
                  <img src={item.image} alt="" />
                </div>
                <div class="image_price">
                  <span>Rs. {item.price}</span>
                </div>
              </div>
              <div className="right">
                <h3>Reviews:</h3>
                <div className="rating">
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <img src={Star} alt="" />
                  <span className="first_span">{item.rating?.rate}</span>
                  <span>({item.rating?.count})</span>
                </div>
                <h3>Select Color:</h3>
                <div className="swatches">
                  <label for="color0">
                    <input
                      type="radio"
                      id="color0"
                      name="color"
                      value="#f0969e"
                    />
                    <div
                      class="colors"
                      style={{ background: "rgb(240, 150, 158)" }}
                    ></div>
                  </label>
                  <label for="color1">
                    <input
                      type="radio"
                      id="color1"
                      name="color"
                      value="#d5d5d4"
                    />
                    <div
                      className="colors"
                      style={{ background: "rgb(213, 213, 212)" }}
                    ></div>
                  </label>
                  <label for="color2">
                    <input
                      type="radio"
                      id="color2"
                      name="color"
                      value="#1e1e1e"
                    />
                    <div
                      className="colors"
                      style={{ background: "rgb(30, 30, 30)" }}
                    ></div>
                  </label>
                  <label for="color3">
                    <input
                      type="radio"
                      id="color3"
                      name="color"
                      value="#cb141a"
                    />
                    <div
                      className="colors"
                      style={{ background: "rgb(203, 20, 26)" }}
                    ></div>
                  </label>
                </div>
                <h3>Select Size:</h3>
                <div className="sizes">
                  <label for="size0">
                    <input type="radio" id="size0" name="size" value="41" />
                    <div className="size-box">41</div>
                  </label>
                  <label for="size1">
                    <input type="radio" id="size1" name="size" value="42" />
                    <div className="size-box">42</div>
                  </label>
                  <label for="size2">
                    <input type="radio" id="size2" name="size" value="43" />
                    <div className="size-box">43</div>
                  </label>
                  <label for="size3">
                    <input type="radio" id="size3" name="size" value="44" />
                    <div className="size-box">44</div>
                  </label>
                  <label for="size4">
                    <input type="radio" id="size4" name="size" value="45" />
                    <div className="size-box">45</div>
                  </label>
                  <label for="size5">
                    <input type="radio" id="size5" name="size" value="46" />
                    <div className="size-box">46</div>
                  </label>
                  <label for="size6">
                    <input type="radio" id="size6" name="size" value="47" />
                    <div className="size-box">47</div>
                  </label>
                  <label for="size7">
                    <input type="radio" id="size7" name="size" value="48" />
                    <div className="size-box">48</div>
                  </label>
                </div>
                <button>Add to cart</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductDetails;
