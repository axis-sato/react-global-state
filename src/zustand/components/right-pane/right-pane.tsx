type RightPaneProps = {
  foo: string;
  bar: string;
};

export default function RightPane({ foo, bar }: RightPaneProps) {
  return (
    <div style={{ flex: "auto" }}>
      Right Pane
      <div>foo: {foo}</div>
      <div>bar: {bar}</div>
    </div>
  );
}
