import React, { FC } from "react";
import { Lock } from "@mui/icons-material";
// transition-all min-w-full rounded-md h-28  bg-chambray-600 text-chambray-200 p-3 text-xs bg-opacity-30 focus:outline-none shadow-lg placeholder-chambray-600
export const SecretShared: FC = () => {
  return (
    <section className="my-3">
      <div className="min-w-full min-h-full relative transition-all overflow-hidden border-chambray-600 border rounded-md shadow-lg bg-chambray-600 bg-opacity-30 h-28">
        <div
          className={`animate-pulse min-w-full min-h-full absolute flex flex-col justify-center items-center text-green-400 transition-all border-1 border-chambray-700`}
        >
          <Lock />
          <span className="text-xs mt-2">Secret shared successfully</span>
        </div>
      </div>
    </section>
  );
};
