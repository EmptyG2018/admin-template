import { useSelector } from "react-redux";

const useUser = () => {
  return useSelector((store: any) => store.user);
}

export default useUser;
