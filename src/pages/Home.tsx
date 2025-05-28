import React, { useEffect, useState } from "react";
import axios from "axios";
import SpinnerDemo from "../components/spinner-01";
import PricingCard from "../components/pricingcard/price";
import Review from "../components/Review";
import ResponsiveSearchBar from "../components/search";

export default function Home() {
  const [postdata, setPostData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://webcomponents.blog/wp-json/myplugin/v1/templates"
        );
        setPostData(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <ResponsiveSearchBar />
      <section className="md:p-[32px] p-[24px] md:rounded-[46px] rounded-[32px] mt-10 bg-[#fff] dark:bg-[#1a1a1a] w-full md:w-[95%] lg:w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex flex-wrap gap-6 items-stretch">
        {loading ? (
          <SpinnerDemo />
        ) : (
          postdata.map((item, index) => (
            <a
              href={item.custom_fields._template_link?.[0]}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="card"
            >
              <div className="card__shine"></div>
              <div className="card__glow"></div>
              <div className="card__content">
                {/* NEW Badge */}
                {item.custom_fields._template_paid?.[0] === "paid" && (
                  <div className="card__badge">Paid</div>
                )}

                {/* Image Background */}
                <div
                  className="card__image md:h-[200px] lg:h-[250px]"
                  style={
                    {
                      "--bg-color": "#a78bfa",
                      backgroundImage: `url(${item.featured_image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    } as React.CSSProperties
                  }
                ></div>

                {/* Text */}
                <div className="card__text">
                  <p className="card__title">{item.title}</p>
                  {/* <p className="card__description">{item.excerpt}</p> */}
                  <p>Preview</p>
                </div>

                {/* Footer */}
                <div className="card__footer bg-black rounded-full">
                  {/* <div className="card__price text-neon-green">
                  ₹{item.custom_fields._template_price?.[0]} || free
                  
                </div> */}
                  <div className="card__price text-neon-green">
                    {`₹${item.custom_fields._template_price?.[0] ?? "free"}`}
                  </div>

                  <div className="card__button">
                    <svg height="16" width="16" viewBox="0 0 24 24">
                      <path
                        strokeWidth="2"
                        stroke="currentColor"
                        d="M4 12H20M12 4V20"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))
        )}
      </section>
      <Review />
      <PricingCard />
    </>
  );
}
