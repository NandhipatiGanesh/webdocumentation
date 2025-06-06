import React, { useEffect, useState, FC } from "react";
import axios from "axios";
import SpinnerDemo from "../spinner-01";

type ButtonsEvents = {
  labelOne: string;
  labelTwo: string;
  onClickOne?: () => void;
  onClickTwo?: () => void;
};

export default function ReactComponents() {
  const [postdata, setPostData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageLoaded, setPageLoaded] = useState(false);

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
  useEffect(() => {
    const handleLoad = () => setPageLoaded(true);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <section className="md:p-[32px] p-[24px] md:rounded-[46px] rounded-[32px] mt-10 bg-[#fff] dark:bg-[#1a1a1a] w-full">
      <h2 className="text-left text-2xl font-bold text-black dark:text-white md:text-4xl">
        React Components
      </h2>

      {loading ? (
        <SpinnerDemo />
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {postdata.map((item, index) => (
            <a
              key={index}
              href={item.custom_fields._template_link?.[0] || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="card border-1"
            >
              <div className="card__shine"></div>
              <div className="card__glow"></div>
              <div className="card__content">
                {/* Paid Badge */}
                {item.custom_fields._template_paid?.[0] === "paid" && (
                  <div className="card__badge">Paid</div>
                )}

                {/* Image */}
                {/* <div
                  className="card__image md:h-[200px] lg:h-[250px]"
                  style={{
                    backgroundImage: `url(${item.featured_image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div> */}
                <div className="card__image">
                  {pageLoaded && (
                    <img
                      src={item.featured_image}
                      alt="Card preview"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  )}
                </div>

                {/* Text Content */}
                <div className="card__text">
                  <p className="card__title">{item.title}</p>
                  {/* <a
                    href={item.custom_fields._template_preview?.[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card__description"
                  >
                    Preview
                  </a> */}
                </div>

                {/* Footer */}
                <div className="card__footer">
                  <ActionButtons
                    labelOne={
                      item.custom_fields._template_paid?.[0] === "paid"
                        ? `₹${item.custom_fields._template_price?.[0] ?? "0"}`
                        : "Free"
                    }
                    labelTwo="Preview"
                    onClickTwo={() =>
                      window.open(
                        item.custom_fields._template_preview?.[0],
                        "_blank"
                      )
                    }
                  />
                </div>
              </div>
            </a>
          ))}
        </section>
      )}
    </section>
  );
}
const ActionButtons: React.FC<ButtonsEvents> = ({
  labelOne,
  labelTwo,
  onClickOne,
  onClickTwo,
}) => {
  return (
    <div className="flex gap-2 w-full">
      <button
        type="button"
        onClick={onClickOne}
        className="py-4 px-5 text-sm w-full font-medium rounded-2xl border border-transparent bg-[#000] text-white hover:bg-blue-700"
      >
        {labelOne}
      </button>

      <button
        type="button"
        onClick={onClickTwo}
        className="py-4 px-5 w-full text-sm font-medium rounded-2xl border border-gray-200 bg-white text-gray-800 hover:bg-gray-50"
      >
        {labelTwo}
      </button>
    </div>
  );
};
