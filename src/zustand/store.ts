import { create, StateCreator } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

interface CoachingSlice {
  coaching: {
    past: {
      foo: string;
      bar: string;
    };
    current: {
      foo: string;
      bar: string;
    };
  };
  changeCurrentFoo: (foo: string) => void;
  changeCurrent: () => void;
}
const createCoachingSlice: ImmerStateCreator<CoachingSlice> = (set) => ({
  coaching: {
    past: { foo: "foo", bar: "bar" },
    current: { foo: "foo", bar: "bar" },
  },
  changeCurrentFoo: (foo) =>
    set((state) => {
      state.coaching.current.foo = foo;
    }),
  changeCurrent: () =>
    set((state) => {
      state.coaching.current = {
        foo: "updated foo",
        bar: "updated bar",
      };
    }),
});

interface UserSlice {
  user: { name: string };
  changeUser: (name: string) => void;
}
const createUserSlice: ImmerStateCreator<UserSlice> = (set) => ({
  user: { name: "John" },
  changeUser: (name) =>
    set((state) => {
      state.user.name = name;
    }),
});

interface MedicineSlice {
  medicine: { name: string };
  changeMedicine: (name: string) => void;
}
const createMedicineSlice: ImmerStateCreator<MedicineSlice> = (set) => ({
  medicine: { name: "John" },
  changeMedicine: (name) => set({ medicine: { name } }),
});

type StoreState = UserSlice & MedicineSlice & CoachingSlice;

// See: https://github.com/pmndrs/zustand/discussions/2070#discussion-5652006
type ImmerStateCreator<T> = StateCreator<
  StoreState,
  [["zustand/immer", never], never],
  [],
  T
>;

export const useStore = create<StoreState>()(
  immer(
    devtools((...args) => ({
      ...createCoachingSlice(...args),
      ...createUserSlice(...args),
      ...createMedicineSlice(...args),
    })),
  ),
);
