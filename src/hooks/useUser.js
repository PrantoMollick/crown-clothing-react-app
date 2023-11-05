import { useContext } from "react";
import { UserContext } from "../contexts/user.context";

export const useUser = function () {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  return { currentUser, setCurrentUser };
};
