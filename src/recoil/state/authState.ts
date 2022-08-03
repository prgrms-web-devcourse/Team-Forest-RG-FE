import { atom } from "recoil";

export const userState = atom<any>({
  key: "user",
  default: "",
});

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));

      onSet((newValue: any, _: any, isReset: boolean) => {
        if (isReset) {
          localStorage.removeItem(key);
        } else {
          localStorage.setItem(key, JSON.stringify(newValue));
        }
      });
    }
  };
export const tokenState = atom<string>({
  key: "token",
  default: localStorage.getItem("token") || "",
  effects: [localStorageEffect("token")],
});

export const isAuthState = atom<boolean>({
  key: "isAuth",
  default: false,
});
