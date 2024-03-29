import { useSelector } from "react-redux";

const useAuth = () => {
  return useSelector((store: any) => store.user);
}

export default useAuth;
