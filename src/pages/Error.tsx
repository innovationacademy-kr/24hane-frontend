import React from "react";
import classes from "styles/components/MainHeader.module.css";

type ErrorProps = {
  statusCode?: string;
  message?: string;
};

const Error = ({ statusCode = "404", message = "notFound" }: ErrorProps) => {
  return (
    <>
      <span className={classes.logo}>42 logo</span>
      <div>
        <h1>
          {statusCode}
          <br></br>
          {message} ErrorPage
        </h1>
      </div>
    </>
  );
};

export default Error;
