import React, { useCallback, useEffect } from "react";
import Button from "components/common/Button";
import MainHeader from "components/layout/MainHeader";
import MainNotice from "components/layout/MainNotice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/features/store";
import { getIsLogin } from "api/api";
import { setIsLogin } from "app/features/user/userSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.user.isLogin);

  const init = useCallback(async () => {
    const data = await getIsLogin();
    if (data.status === 200) dispatch(setIsLogin());
  }, [dispatch]);

  const handleLogin = () => {
    window.location.href = `${
      process.env.REACT_APP_API_URL
    }/user/login/42?redirect=${encodeURIComponent(window.location.href)}`;
  };

  useEffect(() => {
    init();
  }, [init]);

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
