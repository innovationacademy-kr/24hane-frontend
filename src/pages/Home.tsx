import React, { useEffect } from "react";
import Button from "components/common/Button";
import MainHeader from "components/layout/MainHeader";
import MainNotice from "components/layout/MainNotice";
import { useNavigate } from "react-router-dom";
import useUser from "utils/hooks/useUser";

const Home = () => {
  const navigate = useNavigate();
  const {
    user: { isLogin },
  } = useUser();

  const handleLogin = () => {
    window.location.href = `${
      process.env.REACT_APP_API_URL
    }/user/login/42?redirect=${encodeURIComponent(window.location.href)}`;
  };

  useEffect(() => {
    if (isLogin) navigate("/main");
  }, [isLogin, navigate]);

  return (
    <>
      <div>
        <MainHeader />
        <MainNotice />
        <Button type='button' onClick={handleLogin} text='LOG IN' />
      </div>
    </>
  );
};

export default Home;
