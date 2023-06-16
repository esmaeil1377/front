import { AuthProps } from "intefaces/Interfaces";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = ({ children }: AuthProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
  }, [navigate]);

  return <>{children}</>;
};

export default Auth;
