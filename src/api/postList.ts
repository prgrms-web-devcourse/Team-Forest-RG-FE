import axiosInstance from "./axiosInstance";

export interface postParameter {
  addressCode?: number;
  bicycleCode?: number;
  ridingLevel?: string;
  ridingStatusCode?: number;
  page?: number;
  size?: number;
}

const parameterKey: Array<keyof postParameter> = [
  "addressCode",
  "bicycleCode",
  "ridingLevel",
  "ridingStatusCode",
  "page",
  "size",
];

export const getPostList = async (props?: postParameter) => {
  const parameters: string | undefined =
    props &&
    parameterKey
      .filter((key) => props[key] !== undefined)
      .map((key) => `${key}=${props[key]}`)
      .join("&");
  const url = `/api/v1/ridingposts${
    parameters?.length ? `?${parameters}` : ""
  }`;
  const response = await axiosInstance({
    method: "GET",
    url,
  });
  return response.data;
};
