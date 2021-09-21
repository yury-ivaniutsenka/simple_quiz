import React, { memo } from "react";
import classNames from "classnames";

import styles from "./styles.module.css";

const Page = ({ children, className, ...rest }) => {
  const classes = classNames(styles.page, className);

  return (
    <div className={classes} {...rest}>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default memo(Page);
