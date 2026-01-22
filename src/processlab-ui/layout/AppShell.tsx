import * as React from "react";

import { cn } from "@/processlab-ui/utils";

type AppShellProps = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

const AppShell = ({ header, footer, className, children }: AppShellProps) => {
  return (
    <div className={cn("min-h-screen bg-background", className)}>
      {header}
      {children}
      {footer}
    </div>
  );
};

export default AppShell;
export { AppShell };
