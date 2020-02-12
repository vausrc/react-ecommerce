const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://react-ecommerce.now.sh"
    : "http://localhost:3000";

export default baseUrl;
