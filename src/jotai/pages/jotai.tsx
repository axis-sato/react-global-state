import CenterPane from "../components/center-pane";
import LeftPane from "../components/left-pane";
import RightPane from "../components/right-pane";

export default function JotaiPage() {
  return (
    <div style={{ display: "flex" }}>
      <LeftPane />
      <CenterPane />
      <RightPane />
    </div>
  );
}
