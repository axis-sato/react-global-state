import { useCurrentCoachingAtom } from "../../atoms/current-coaching-atom";
import RightPane from "./right-pane";

export default function RightPaneContainer() {
  const { currentCoaching } = useCurrentCoachingAtom();
  return <RightPane foo={currentCoaching.foo} bar={currentCoaching.bar} />;
}
