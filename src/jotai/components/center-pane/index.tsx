import { useCurrentCoachingDispatch } from "../../atoms/current-coaching-atom";
import CenterPane from "./center-pane";
import { usePastCoachingAtom } from "./past-coaching-atom";

export default function CenterPaneContainer() {
  const { pastCoaching } = usePastCoachingAtom();
  const { changeCurrent, changeCurrentFoo } = useCurrentCoachingDispatch();
  return (
    <CenterPane
      foo={pastCoaching.foo}
      bar={pastCoaching.bar}
      onChangeFoo={() => changeCurrentFoo("updated foo")}
      onChange={changeCurrent}
    />
  );
}
