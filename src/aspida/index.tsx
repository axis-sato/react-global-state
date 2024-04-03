import { useState } from "react";
import User from "./user";

export default function AspidaPage() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      aspida
      <User enabled={enabled} />
      <button onClick={() => setEnabled(true)}>fetch</button>
    </div>
  );
}
