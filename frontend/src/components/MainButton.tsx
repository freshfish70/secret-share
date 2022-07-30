import React, { FC } from "react";
interface MainButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}
export const MainButton: FC<MainButtonProps> = (props) => {
  let classes =
    "flex justify-center items-center bg-chambray-500 px-6 py-3 rounded-md text-white uppercase hover:bg-chambray-400 transition-all flex-none text-xs";
  if (props.className) {
    classes += ` ${props.className}`;
  }
  return (
    <button {...props} className={classes}>
      {props.children}
    </button>
  );
};

export default MainButton;
