//export const baseUrl = import.meta.env.VITE_API_URL + "/api";
export const baseUrl = window.__ENV__?.API_URL
  ? `${window.__ENV__.API_URL}/api`
  : `${window.location.origin}/diagramador-backend/api`;

