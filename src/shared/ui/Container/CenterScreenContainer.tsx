import React, { ReactNode } from "react";

interface CenterScreenContainerProps {
  children: ReactNode;
  className?: string;
}

export const CenterScreenContainer: React.FC<CenterScreenContainerProps> = ({
  children,
  className,
}) => {
  return (
    <main className={"w-screen h-screen"}>
      <div
        className={"text-center mt-[20%] mx-auto flex flex-col justify-center"}
      >
        {children}
      </div>
    </main>
  );
};
