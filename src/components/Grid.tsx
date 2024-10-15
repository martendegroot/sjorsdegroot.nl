import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { cx } from "class-variance-authority";

export type GridProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Grid: React.FC<GridProps> = (props) => (
  <div
    {...props}
    className={cx(
      "grid grid-cols-12 gap-4 sm:gap-8 mx-4 w-full max-w-[1140px] lg:mx-auto",
      props.className
    )}
  />
);
