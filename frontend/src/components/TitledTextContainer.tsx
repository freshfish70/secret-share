import React from "react";

interface TitledTextContainerProps {
  title: string;
  text: string;
  subtext: string;
}
export default function TitledTextContainer({
  title,
  text,
  subtext,
}: TitledTextContainerProps) {
  return (
    <div className="my-2 p-3 rounded bg-chambray-800 hover:bg-chambray-800 transition-all cursor-pointer opacity-60 hover:opacity-100">
      <span className="block text-chambray-300 pt-2 hov">{title}</span>
      <div className="text-chambray-200 text-sm py-2 px-5 text-center">
        {text}
      </div>
      <div className="text-chambray-300 text-sm px-5 text-center">
        {subtext}
      </div>
    </div>
  );
}
