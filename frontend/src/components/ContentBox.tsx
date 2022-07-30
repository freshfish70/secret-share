import React, { ReactNode } from "react";

export default function ContentBox({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center w-full px-10">
      <div className="w-full border border-chambray-600 border-solid p-8 max-w-3xl shadow-2xl bg-chambray-700 bg-opacity-100 flex flex-col justify-center items-center rounded-xl">
        {children}
      </div>
    </div>
  );
}
