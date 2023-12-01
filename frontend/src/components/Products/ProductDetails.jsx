import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../styles/styles';
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart } from 'react-icons/ai';

const ProductDetails = ({data}) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const [select, setSelect] = useState(0);


  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleMessageSubmit = async () => {

    navigate(`/inbox?conversation=hgfgddytfughtdfty`);
    // if (isAuthenticated) {
    //   const groupTitle = data._id + user._id;
    //   const userId = user._id;
    //   const sellerId = data.shop._id;
    //   await axios
    //     .post(`${server}/conversation/create-new-conversation`, {
    //       groupTitle,
    //       userId,
    //       sellerId,
    //     })
    //     .then((res) => {
    //       navigate(`/inbox?conversation=hgfgddytfughtdfty`);
    //     })
    //     .catch((error) => {
    //       toast.error(error.response.data.message);
    //     });
    // } else {
    //   toast.error("Please login to create a conversation");
    // }
  };




  return (
    <div className="bg-white">
            {data ? (
        <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
          <div className="w-full py-5">
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <img
                  src={data.image_Url[select].url}
                  alt=""
                  className="w-[80%]"
                />
                <div className="w-full flex">
                  {/* {data &&
                    data.images.map((i, index) => ( */}
                      <div
                        className={`${
                          select === 0 ? "border" : "null"
                        } cursor-pointer`}
                      >
                        <img
                          src={data?.image_Url[0].url}
                          alt=""
                          className="h-[200px] overflow-hidden mr-3 mt-3"
                          onClick={() => setSelect(0)}
                        />
                      </div>
                      <div
                        className={`${
                          select === 1 ? "border" : "null"
                        } cursor-pointer`}
                      >
                        <img
                          src={data?.image_Url[1].url}
                          alt=""
                          className="h-[200px] overflow-hidden mr-3 mt-3"
                          onClick={() => setSelect(1)}
                        />
                      </div>
                    {/* // )) */}
                    {/* } */}
                </div>
              </div>
              <div className="w-full 800px:w-[50%] pt-5">
                <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                <p>{data.description}</p>
                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    {data.discount_price}$
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {data.price ? data.price + "$" : null}
                  </h3>
                </div>

                <div className="flex items-center mt-12 justify-between pr-3">
                  <div>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        // onClick={() => removeFromWishlistHandler(data)}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        // onClick={() => addToWishlistHandler(data)}
                        color={click ? "red" : "#333"}
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>

                <div
                  className={`${styles.button} !mt-6 !rounded !h-11 flex items-center`}
                //   onClick={() => addToCartHandler(data._id)}
                >
                  <span className="text-white flex items-center">
                    Add to cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>

                <div className="flex items-center pt-8">
                  {/* <Link to={`/shop/preview/${data?.shop._id}`}> */}
                    <img
                      src={`${data?.shop?.avatar?.url}`}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full mr-2"
                    />
                  {/* </Link> */}
                  <div className="pr-8">
                    {/* <Link to={`/shop/preview/${data?.shop._id}`}> */}
                      <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                        {data.shop.name}
                      </h3>
                    {/* </Link> */}
                    <h5 className="pb-3 text-[15px]">
                        ({data.shop.ratings}) Ratings
                      {/* ({averageRating}/5) Ratings */}
                    </h5>
                  </div>
                  <div
                    className={`${styles.button} bg-[#6443d1] mt-4 !rounded !h-11`}
                    onClick={handleMessageSubmit}
                  >
                    <span className="text-white flex items-center">
                      Send Message <AiOutlineMessage className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductDetailsInfo
            data={data}
            // products={products}
            // totalReviewsLength={totalReviewsLength}
            // averageRating={averageRating}
          />
          <br />
          <br />
        </div>
      ) : null}
    </div>
  )
};

const ProductDetailsInfo = ({
    data,
    // products,
    // totalReviewsLength,
    // averageRating,
  }) => {
    const [active, setActive] = useState(1);
  
    return (
      <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded">
        <div className="w-full flex justify-between border-b pt-10 pb-2">
          <div className="relative">
            <h5
              className={
                "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
              }
              onClick={() => setActive(1)}
            >
              Product Details
            </h5>
            {active === 1 ? (
              <div className={`${styles.active_indicator}`} />
            ) : null}
          </div>
          <div className="relative">
            <h5
              className={
                "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
              }
              onClick={() => setActive(2)}
            >
              Product Reviews
            </h5>
            {active === 2 ? (
              <div className={`${styles.active_indicator}`} />
            ) : null}
          </div>
          <div className="relative">
            <h5
              className={
                "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
              }
              onClick={() => setActive(3)}
            >
              Seller Information
            </h5>
            {active === 3 ? (
              <div className={`${styles.active_indicator}`} />
            ) : null}
          </div>
        </div>

        {active === 1 ? (
          <>
            <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.
              {/* {data.description} */}
            </p>
            <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.
              {/* {data.description} */}
            </p>
          </>
        ) : null}
  
        {active === 2 ? (
          <div className="w-full min-h-[40vh] flex flex-col items-center py-3 overflow-y-scroll">
            <p> No Reviews yet!</p>
            {/* {data &&
              data.reviews.map((item, index) => (
                <div className="w-full flex my-2">
                  <img
                    src={`${item.user.avatar?.url}`}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full"
                  />
                  <div className="pl-2 ">
                    <div className="w-full flex items-center">
                      <h1 className="font-[500] mr-3">{item.user.name}</h1>
                      <Ratings rating={data?.ratings} />
                    </div>
                    <p>{item.comment}</p>
                  </div>
                </div>
              ))} */}
  
            {/* <div className="w-full flex justify-center">
              {data && data.reviews.length === 0 && (
                <h5>No Reviews have for this product!</h5>
              )}
            </div> */}
          </div>
        ) : null}
  
        {active === 3 && (
          <div className="w-full block 800px:flex p-5">
            <div className="w-full 800px:w-[50%]">
            <img
                    src={data?.shop?.avatar?.url}
                    className="w-[50px] h-[50px] rounded-full"
                    alt=""
                  />
                   <div className="pl-3">
                    <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                    <h5 className="pb-2 text-[15px]">
                      ({data.shop.ratings}) Ratings
                    </h5>
                  </div>
                  <p className="pt-2">hjhdsghfjshkshksd</p>
              {/* <Link to={`/shop/preview/${data.shop._id}`}>
                <div className="flex items-center">
                  <img
                    src={`${data?.shop?.avatar?.url}`}
                    className="w-[50px] h-[50px] rounded-full"
                    alt=""
                  />
                  <div className="pl-3">
                    <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                    <h5 className="pb-2 text-[15px]">
                      ({averageRating}/5) Ratings
                    </h5>
                  </div>
                </div>
              </Link> */}
              {/* <p className="pt-2">{data.shop.description}</p> */}
            </div>
            <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
              <div className="text-left">
                <h5 className="font-[600]">
                  Joined on:
                  {/* {" "} */}
                  <span className="font-[500]">
                    27 Nov ,2023
                    {/* {data.shop?.createdAt?.slice(0, 10)} */}
                  </span>
                </h5>
                <h5 className="font-[600] pt-3">
                  Total Products:
                  {/* {" "} */}
                  <span className="font-[500]">
                    1233
                    {/* {products && products.length} */}
                  </span>
                </h5>
                <h5 className="font-[600] pt-3">
                  Total Reviews:
                  {/* {" "} */}
                  <span className="font-[500]">
                    123
                    {/* {totalReviewsLength} */}
                    </span>
                </h5>
                <Link to="/">
                  <div
                    className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3`}
                  >
                    <h4 className="text-white">Visit Shop</h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

export default ProductDetails
