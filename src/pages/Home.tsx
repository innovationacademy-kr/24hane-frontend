import React from "react";
import Button from "components/common/Button";
import MainHeader from "components/layout/MainHeader";

import HomeContents from "components/layout/HomeContents";

const Home = () => {
  const handleLogin = () => {
    window.location.href = `${
      process.env.REACT_APP_API_URL
    }/user/login/42?redirect=${encodeURIComponent(window.location.origin)}/main`;
  };

  return (
    <>
      <MainHeader />
      <HomeContents />
      <Button type='button' onClick={handleLogin} text='LOG IN' />
    </>
  );
};

export default Home;
