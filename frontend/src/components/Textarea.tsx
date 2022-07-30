import React, { forwardRef } from "react";

export const Textarea = React.forwardRef(
  (
    props: React.DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    ref: any
  ) => {
    return (
      <textarea
        ref={ref}
        placeholder="Paste your secret here..."
        className="min-w-full rounded-md mb-5 border border-chambray-600 bg-chambray-800 bg-opacity-50 text-chambray-200 p-3 text-xs focus:outline-none shadow-lg placeholder-chambray-500 h-28"
        {...props}
      ></textarea>
    );
  }
);
