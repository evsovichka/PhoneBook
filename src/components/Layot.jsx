import { Suspense } from "react";
import AppBar from "./AppBar/AppBar";
import { useSelector } from "react-redux";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { selectIsError } from "../redux/auth/selectors";
import { selectError } from "../redux/contacts/selectors";
import toast from "react-hot-toast";
import { useEffect } from "react";

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
      {/* {(isErrorContact || IsErrorAuth) && <ErrorMessage />} */}
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
}
