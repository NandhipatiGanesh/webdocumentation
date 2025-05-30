import purgeCSSPlugin from "@fullhuman/postcss-purgecss";

const isProduction = process.env.NODE_ENV === "production";

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(isProduction && {
      "@fullhuman/postcss-purgecss": purgeCSSPlugin({
        content: ["./src/**/*.tsx", "./public/index.html"], // Adjust as needed
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      }),
    }),
  },
};
