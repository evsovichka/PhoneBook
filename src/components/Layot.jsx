import { Suspense } from "react";
import AppBar from "./AppBar/AppBar";

export default function Layot({ children }) {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
}
