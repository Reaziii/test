import { FC } from "react";
import { Link as RouterLink, LinkProps } from "react-router-dom";

const Link: FC<LinkProps> = ({ children, className, ...rest }) => {
  return (
    <RouterLink
      className={`text-indigo-600 hover:text-indigo-500 font-medium`}
      {...rest}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
