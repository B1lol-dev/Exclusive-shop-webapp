import type { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: IContainerProps) => {
  return (
    <div className={`max-w-[1160px] w-full mx-auto px-2.5 ${className}`}>
      {children}
    </div>
  );
};
