import React from "react";

const sizes = {
  s: "text-5xl font-bold md:text-[44px] sm:text-[38px]",
  md: "text-[55px] font-extrabold md:text-[47px] sm:text-[41px]",
  xs: "text-3xl font-bold md:text-[28px] sm:text-[26px]",
  lg: "text-8xl font-bold md:text-5xl",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-calibri ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
