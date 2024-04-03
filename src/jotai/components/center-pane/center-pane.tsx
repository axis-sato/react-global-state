import { ComponentProps } from "react";

type CenterPaneProps = {
  foo: string;
  bar: string;
  onChangeFoo: ComponentProps<"button">["onClick"];
  onChange: ComponentProps<"button">["onClick"];
};

export default function CenterPane({
  foo,
  bar,
  onChangeFoo,
  onChange,
}: CenterPaneProps) {
  return (
    <div style={{ flex: "auto" }}>
      Center Pane
      <div>foo: {foo}</div>
      <div>bar: {bar}</div>
      <button onClick={onChangeFoo}>update current foo</button>
      <button onClick={onChange}>update current</button>
    </div>
  );
}
