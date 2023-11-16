import { useSelector } from "react-redux";

export const useUser = function () {
  const currentUser = useSelector((state) => state.user.currentUser);
  return currentUser;
};
