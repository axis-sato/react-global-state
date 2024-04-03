import { atom, useAtom } from "jotai";

type User = {
  name: string;
};

const userAtom = atom<User>({ name: "John" });

export const useUserDispatch = () => {
  const [, setUser] = useAtom(userAtom);

  const changeUser = (name: string) => {
    setUser((current) => ({ ...current, name }));
  };

  return { changeUser };
};
export const useUserAtom = () => {
  const [user] = useAtom(userAtom);
  const { changeUser } = useUserDispatch();

  return { user, changeUser };
};
