import React, { memo } from "react";
import classNames from "classnames";

import styles from "./styles.module.css";

const Title = ({ children, className, ...rest }) => {
  const classes = classNames(styles.title, className);

  return (
    <h1 className={classes} {...rest}>
      {children}
    </h1>
  );
};

export default memo(Title);
