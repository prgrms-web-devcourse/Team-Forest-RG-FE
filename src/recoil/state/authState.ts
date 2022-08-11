import { atom } from "recoil";

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);

    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));

      onSet((newValue: string | null, _: any, isReset: boolean) => {
        if (isReset || !newValue) {
          localStorage.removeItem(key);
        } else {
          localStorage.setItem(key, JSON.stringify(newValue));
        }
      });
    }
  };
export const tokenState = atom<string | null>({
  key: "token",
  default: localStorage.getItem("token") || null,
  effects: [localStorageEffect("token")],
});

export const isAuthState = atom<boolean>({
  key: "isAuth",
  default: false,
});

export const userState = atom<number | null>({
  key: "user",
  default: null,
});
