import axiosInstance from "./axiosConfig";
import {
  Credentials,
  LoginResponse,
  listParameter,
} from "intefaces/Interfaces";

export const login = async (
  credentials: Credentials
): Promise<LoginResponse | null> => {
  try {
    const { data } = await axiosInstance.post("/login", credentials);
    return data;
  } catch (e) {
    return null;
  }
};

export const logout = async () => {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const { data } = await axiosInstance.post("/logout", {}, config);
    if (data?.result === "success") {
      localStorage.setItem("token", "");
      return true;
    }
  } catch (e) {
    return null;
  }
};

export const getUsername = async () => {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const { data } = await axiosInstance.get("/username", config);
    if (data?.result === "success") {
      return data?.username;
    }
    return data?.result;
  } catch (e: any) {
    return e?.response?.data?.result;
  }
};

export const getList = async (parameters: listParameter) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const { data } = await axiosInstance.get(
      `/list?page=${parameters?.page}&size=${parameters?.size}`,
      config
    );
    if (data?.result !== "unauthorized") {
      return data;
    }
    return data?.result;
  } catch (e: any) {
    return e?.response?.data?.result;
  }
};
