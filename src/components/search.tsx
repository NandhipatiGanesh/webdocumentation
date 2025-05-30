import { useEffect, useState } from "react";
import UserAvatarGroup from "./avgroup";
const ResponsiveSearchBar = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); // 0.5 seconds
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <section className="my-20">
        <h2
          className="text-center text-2xl font-bold text-black dark:text-white md:text-4xl"
          style={{
            lineHeight: "1.4",
            marginBottom: "1rem",
          }}
        >
          FREE Webcomponents <br></br> and Templates
        </h2>

        <label
          className="mx-auto w-[90%] md:w-[45%] relative bg-white  flex flex-col md:flex-row items-center justify-center border py-2 px-2 md:rounded-1xl rounded-3xl gap-2 shadow-2xl focus-within:border-gray-300"
          htmlFor="search-bar"
        >
          <input
            id="search-bar"
            placeholder="your keyword here"
            className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
          />
          <button className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-3xl md:rounded-1xl transition-all disabled:opacity-70">
            <div className="relative">
              <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                <svg
                  className="opacity-0 animate-spin w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>

              <div className="flex items-center transition-all opacity-1 valid:">
                <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                  Search
                </span>
              </div>
            </div>
          </button>
        </label>
        <div className="flex justify-center items-center gap-2  flex-col  mt-4">
          {loading ? (
            // Skeleton Loader
            <div className="flex space-x-2">
              {[...Array(4)].map((_, idx) => (
                <div
                  key={idx}
                  className="h-10 w-10 rounded-full bg-gray-300 animate-pulse"
                ></div>
              ))}
            </div>
          ) : (
            <UserAvatarGroup />
          )}
          <p>Regular users</p>
        </div>
      </section>
    </>
  );
};

export default ResponsiveSearchBar;
