import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <section
      className={cn(
        "h-full w-full container mx-auto md:max-w-178.75 px-2 font-sans md:px-0 ",
        className
      )}>
      {children}
    </section>
  );
};

export default Container;
