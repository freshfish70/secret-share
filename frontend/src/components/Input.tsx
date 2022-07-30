import React from "react";

const Input = React.forwardRef(
  (
    props: React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    ref: any
  ) => {
    let classes =
      "min-w-full rounded-md mb-5 border border-chambray-600 bg-chambray-800 bg-opacity-50 text-chambray-200 p-3 text-xs focus:outline-none shadow-lg placeholder-chambray-500";
    if (props.className) classes += ` ${props.className}`;
    return <input ref={ref} {...props} className={classes} />;
  }
);

export default Input;
