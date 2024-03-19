import React from "react";

const sizes = {
  xs: "text-[10px] font-medium leading-[140%]",
  lg: "text-lg font-normal",
  s: "text-sm font-normal leading-[140%]",
  "2xl": "text-[40px] font-medium leading-[55px] md:text-[38px] sm:text-4xl",
  "3xl": "text-7xl font-medium md:text-5xl",
  xl: "text-2xl font-normal md:text-[22px]",
  md: "text-base font-medium",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
