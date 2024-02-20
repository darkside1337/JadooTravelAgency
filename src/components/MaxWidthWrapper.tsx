import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MaxWidthWrapper = ({ children }: Props) => {
  return (
    <div className="mx-auto max-w-screen-xl px-2.5 md:px-20">{children}</div>
  );
};

export default MaxWidthWrapper;
