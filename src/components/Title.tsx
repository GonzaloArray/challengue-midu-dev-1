import React from "react";

interface Props {
  children: React.ReactNode
}

export const Title = ({ children }: Props) => {
  return (
    <h1 className="font-bold text-2xl text-lime-100 my-7 text-center">
      {children}
    </h1>
  );
};
