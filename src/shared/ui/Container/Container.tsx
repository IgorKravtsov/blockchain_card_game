import React, { ReactNode } from "react";
import cn from "classnames";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return (
    <main className={cn("max-w-screen-lg mx-auto", className)}>{children}</main>
  );
};
