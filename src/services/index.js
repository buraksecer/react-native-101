import axios from "../utils/axios";
import { tryCatch } from "@thalesrc/js-utils";
import { API_URL } from "@env";

export async function Post(payload) {
  const url = API_URL;

  const [error, result] = await tryCatch(axios.post(url, payload));

  if (error) throw error;

  return result.data.result;
}

export async function Get() {
  const url = API_URL;

  const [error, result] = await tryCatch(axios.get(url));
  if (error) throw error;

  return result;
}

export async function GetById(payload) {
  const url = `${API_URL}/${payload.id}`;

  const [error, result] = await tryCatch(axios.get(url));
  if (error) throw error;

  return result;
}

export async function Put(payload) {
  const url = API_URL;

  const [error, result] = await tryCatch(axios.put(url, payload));

  if (error) throw error;

  return result?.data?.result;
}

export async function Delete(id) {
  const url = API_URL;

  const [error, result] = await tryCatch(http.delete(url, id));

  if (error) throw error;

  return result?.data?.result;
}

module.exports = {
  Get,
  GetById,
  Post,
  Delete,
  Put
};
