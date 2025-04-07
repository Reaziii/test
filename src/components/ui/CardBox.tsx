import React, { FC } from "react";

interface CardBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
const CardBox: FC<CardBoxProps> = ({ children, className, ...rest }) => {
  return (
    <div
      className={`max-w-md w-full space-y-8 p-10 bg-white rounded-3xl border border-neutral-200 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default CardBox;
