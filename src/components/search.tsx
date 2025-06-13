import { useEffect, useState } from "react";
import UserAvatarGroup from "./avgroup";

const ResponsiveSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchSearchResults = async (query: string) => {
    if (!query) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://webcomponents.blog/wp-json/myplugin/v1/templates?search=${query}`
      );
      const data = await res.json();
      setResults(data);
      setShowResults(true);
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchQuery.length > 1) {
        fetchSearchResults(searchQuery);
      } else {
        setResults([]);
        setShowResults(false);
      }
    }, 400); // debounce delay

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  return (
    <section className="my-10 relative">
      <div className="text-center mb-6">
        <h2
          className="text-center text-2xl font-bold text-black dark:text-white md:text-4xl"
          style={{
            lineHeight: "1.4",
            marginBottom: "1rem",
          }}
        >
          FREE Webcomponents <br></br> and Templates
        </h2>
      </div>
      <label
        className="mx-auto w-[90%] md:w-[45%] relative bg-white  flex flex-col md:flex-row items-center justify-center border py-2 px-2 md:rounded-1xl rounded-3xl gap-2 shadow-2xl focus-within:border-gray-300"
        htmlFor="search-bar"
      >
        <input
          id="search-bar"
          placeholder="Find your template here"
          className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {showResults && (
          <div className="absolute top-full mt-2 bg-white dark:bg-[#1a1a1a] border  rounded-3xl shadow-lg w-full max-h-[400px] overflow-y-auto transition-all z-50 border-gray-300   ">
            {loading ? (
              <p className="p-4 text-center text-gray-500">Searching...</p>
            ) : results.length > 0 ? (
              results.map((item: any) => (
                <a
                  href={item.custom_fields._template_link?.[0] || "#"}
                  key={item.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 hover:bg-neon-green dark:hover:bg-[#111] "
                >
                  <img
                    src={item.featured_image}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded-lg border"
                  />
                  <div className="text-sm text-left">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </p>
                  </div>
                </a>
              ))
            ) : (
              <p className="p-4 text-center text-gray-500">
                No templates found
              </p>
            )}
          </div>
        )}
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
      {/* <div className="relative w-[90%] md:w-[45%] mx-auto">
        <input
          type="text"
          placeholder="Type to search..."
          className="w-full px-6 py-3 border rounded-3xl shadow-md outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div> */}
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
  );
};

export default ResponsiveSearchBar;
