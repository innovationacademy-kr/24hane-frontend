import React from "react";
import classes from "styles/components/MainHeader.module.css";

type NotFoundProps = {
  statusCode?: string;
  message?: string;
};

const NotFound = ({ statusCode = "404", message = "notFound" }: NotFoundProps) => {
  return (
    <>
      <span className={classes.logo}>42 logo</span>
      <div>
        <h1>
          {statusCode}
          <br></br>
          {message} NotFoundPage
        </h1>
      </div>
    </>
  );
};

export default NotFound;
