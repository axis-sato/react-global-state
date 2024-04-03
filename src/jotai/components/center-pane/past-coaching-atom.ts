import { atom, useAtom } from "jotai";

type PastCoaching = {
  foo: string;
  bar: string;
};

const pastCoachingAtom = atom<PastCoaching>({ foo: "foo", bar: "bar" });

export const usePastCoachingAtom = () => {
  const [pastCoaching, setPastCoaching] = useAtom(pastCoachingAtom);

  const changeCurrentFoo = (foo: string) => {
    setPastCoaching((current) => ({ ...current, foo }));
  };

  return { pastCoaching, changeCurrentFoo };
};
