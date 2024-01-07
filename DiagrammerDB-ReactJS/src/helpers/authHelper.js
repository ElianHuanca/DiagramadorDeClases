import { baseUrl } from "../const/const";

export const loginNodeJs = async (nombre, password) => {
  const resp = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre,
      password,
    }),
  });
  const response = await resp.json();
  console.log(response);
  return response;
};

export const registerNodeJs = async ( nombre, password) => {
  const resp = await fetch(`${baseUrl}/usuarios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({      
      nombre,
      password
    }),
  });
  const response = await resp.json();
  console.log(response);
  return response;
};
