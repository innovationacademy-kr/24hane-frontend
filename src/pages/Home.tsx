import React, { useEffect } from "react";
import Button from "components/common/Button";
import MainHeader from "components/layout/MainHeader";
import MainNotice from "components/layout/MainNotice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "app/features/store";

const Home = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state: RootState) => state.user.isLogin);

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
