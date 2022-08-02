import { atom } from "recoil";

export const userState = atom<any>({
  key: "user",
  default: null,
  // TODO: 쿠키(or localStorage)getItem 처리
});

export const tokenState = atom<string>({
  key: "token",
  default: "",
});

export const isAuthState = atom<boolean>({
  key: "isAuth",
  default: false,
});
