export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://instock-server-repo.herokuapp.com"
    : "http://localhost:8080";
