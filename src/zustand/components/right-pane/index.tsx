import { useStore } from "../../store";
import RightPane from "./right-pane";

export default function RightPaneContainer() {
  const { foo, bar } = useStore((state) => state.coaching.current);
  return <RightPane foo={foo} bar={bar} />;
}
