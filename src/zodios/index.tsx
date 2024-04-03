import { Suspense, useState } from "react";
import User from "./user";

export default function ZodiosPage() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      aspida
      <Suspense fallback={<div>loading...</div>}>
        <User enabled={enabled} />
      </Suspense>
      <button onClick={() => setEnabled(true)}>fetch</button>
    </div>
  );
}
