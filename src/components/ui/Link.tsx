import { FC } from "react";
import { Link as RouterLink, LinkProps } from "react-router-dom";

const Link: FC<LinkProps> = ({ children, className, ...rest }) => {
  return (
    <RouterLink
      className={`text-primary hover:text-secondary font-medium`}
      {...rest}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
