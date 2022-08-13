import axiosInstance from "./axiosInstance";

interface postParameter {
    addressCode?: number;
    bicycleCode?: number;
    ridingLevel?: string;
    ridingStatusCode?: number;
}

const parameterKey: Array<keyof postParameter> = [ "addressCode", "bicycleCode", "ridingLevel", "ridingStatusCode" ];

export const getPostList = async (props?: postParameter) => {
    const parameters: string | undefined = props && parameterKey.filter((key) => props[key] !== undefined).map((key) => `${key}=${props[key]}`).join("&");
    const url = `/api/v1/ridingposts${parameters?.length ? "?" + parameters : ""}`;
    const response = await axiosInstance({
        method: "GET",
        url: url,
    });
    return response.data;
};