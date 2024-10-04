import { Suspense } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useEffect } from "react";
import AppBar from "./AppBar/AppBar";
import { selectIsError } from "../redux/auth/selectors";
import { selectError } from "../redux/contacts/selectors";

export default function Layot({ children }) {
  const isErrorContact = useSelector(selectError);
  const IsErrorAuth = useSelector(selectIsError);

  useEffect(() => {
    if (isErrorContact || IsErrorAuth) {
      toast.error("Oops, something went wrong. Please try again.");
    }
  }, [isErrorContact, IsErrorAuth]);
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
}
