import { useAtom, useSetAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

type CurrentCoaching = {
  foo: string;
  bar: string;
};

// const storage = createJSONStorage(() => sessionStorage);
const currentCoachingAtom = atomWithStorage<CurrentCoaching>("key", {
  foo: "foo",
  bar: "bar",
});
currentCoachingAtom.debugLabel = "currentCoaching";

export const useCurrentCoachingDispatch = () => {
  const setCurrentCoaching = useSetAtom(currentCoachingAtom);

  const changeCurrentFoo = (foo: string) => {
    setCurrentCoaching((current) => ({ ...current, foo }));
  };

  const changeCurrent = () => {
    setCurrentCoaching(() => ({ foo: "updated foo", bar: "updated bar" }));
  };

  return { changeCurrentFoo, changeCurrent };
};

export const useCurrentCoachingAtom = () => {
  const [currentCoaching] = useAtom(currentCoachingAtom);
  const { changeCurrent, changeCurrentFoo } = useCurrentCoachingDispatch();

  return { currentCoaching, changeCurrentFoo, changeCurrent };
};
