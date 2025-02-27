export const IS_PRODUCTION = process.env.NODE_ENV === "production";

// 해당 프로젝트의 API baseURL
export const API_BASE_URL = IS_PRODUCTION
  ? "https://kingnaristudio.store/api/bible"
  : "http://localhost:3000/api/bible";

export const WEB_BASE_URL = IS_PRODUCTION
  ? "https://new-bible-1e563.web.app"
  : "http://localhost:5173";
