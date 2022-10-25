import { useNavigate } from "react-router-dom";

// project imports
import { baseURL } from "config";
import { useEffect } from "react";
import { useAppSelector } from "store";

// ==============================|| GUEST GUARD ||============================== //

type Props = {
  children: React.ReactElement | null;
};

const AuthGuard = ({ children }: Props) => {
  const { userInfo } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("userInfox", userInfo);
    if (!userInfo) {
      navigate("/login", { replace: true });
    }
  }, []);

  return children;
};

export default AuthGuard;
