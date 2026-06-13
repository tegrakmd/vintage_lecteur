interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative">
      {/* <BorderRight /> */}
      {/* <BorderLeft /> */}

      <div className="relative z-10">{children}</div>
    </div>
  );
};
export function BorderLeft() {
  return (
    <div className="pointer-events-none absolute top-0 -right-2 bottom-0 z-0 w-px border-l border-neutral-200 md:-right-6 md:w-2 dark:border-neutral-800"></div>
  );
}
export function BorderRight() {
  return (
    <div className="pointer-events-none absolute top-0 bottom-0 -left-2 z-0 w-px border-r border-neutral-200 md:-left-6 md:w-2 dark:border-neutral-800"></div>
  );
}

export default Layout;
