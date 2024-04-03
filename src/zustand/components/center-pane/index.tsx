import { useStore } from "../../store";
import CenterPane from "./center-pane";

export default function CenterPaneContainer() {
  const { foo, bar } = useStore((state) => state.coaching.past);
  const changeCurrentFoo = useStore((state) => state.changeCurrentFoo);
  const changeCurrent = useStore((state) => state.changeCurrent);
  return (
    <CenterPane
      foo={foo}
      bar={bar}
      onChangeFoo={() => changeCurrentFoo("updated foo")}
      onChange={changeCurrent}
    />
  );
}
