const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  exclude: ["node_modules", "dist"],
  include: ["src/**/*"],
};
