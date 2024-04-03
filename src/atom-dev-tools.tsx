import { useAtomsDevtools } from "jotai-devtools";

export default function AtomsDevtools({
  children,
}: {
  children: React.ReactNode;
}) {
  useAtomsDevtools("demo");
  return children;
}
