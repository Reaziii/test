import { FC } from "react";

interface DividerProps {
  height?: number;
  color?: string;
}
const Divider: FC<DividerProps> = ({ height, color }) => {
  return (
    <div
      className="border-t border-gray-300 my-4"
      style={{
        height: height ? `${height}px` : "1px",
        backgroundColor: color ? color : "#E5E7EB",
      }}
    />
  );
};
export default Divider;
