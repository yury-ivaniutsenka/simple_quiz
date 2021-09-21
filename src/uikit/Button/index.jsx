import React, { memo } from "react";
import classNames from "classnames";

import styles from "./styles.module.css";

const Button = ({ children, variant, className, ...rest }) => {
  const classes = classNames(styles.button, styles[variant], className);

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default memo(Button);
