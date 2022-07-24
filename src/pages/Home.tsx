import React from "react";
import Button from "components/common/Button";
import MainHeader from "components/layout/MainHeader";
import MainNotice from "components/layout/MainNotice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/main");

    // window.location.href = `${
    //   process.env.REACT_APP_API_URL
    // }/user/login/42?redirect=${encodeURIComponent(window.location.href)}`;
  };

  //   useEffect(() => {
  //     로그인상태이면 main 으로 보내주는 로직
  //     if (isLogin) navigate("/main");
  //   }, []);

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
