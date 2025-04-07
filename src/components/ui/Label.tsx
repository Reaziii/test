import React, { FC } from "react";
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode;
}
const Label:FC<LabelProps> = ({children, ...rest}) => {
  return (
    <label className="block text-sm font-medium text-neutral-700" {...rest}>
        {children}
    </label>
  );
};

export default Label