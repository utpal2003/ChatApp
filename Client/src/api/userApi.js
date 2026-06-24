import api from "./axios";

export const getWorldUsers = async () => {

  const { data } = await api.get(
    "/users/world"
  );

  return data;
};