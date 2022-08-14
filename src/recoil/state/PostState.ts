import { atom } from "recoil";
import * as T from "response";
import { postParameter } from "@/api/postList";

export const postList = atom<T.PostDetail[]>({
  key: "postList",
  default: [],
});

export const postParameters = atom<postParameter>({
  key: "postParameters",
  default: {},
});
