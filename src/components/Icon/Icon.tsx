import React from "react";

export interface IconProps {
  type: "warning" | "error" | "info" | "success";
}

export type BuiltInIconProps = React.SVGProps<SVGElement> & IconProps;

const Svg: React.FC<BuiltInIconProps> = ({ type, children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke={`${type}`}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className={`feather feather-icon-${type}`}
    viewBox="0 0 24 24"
  >
    {children}
  </svg>
);

function Info(props: BuiltInIconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 16L12 12"></path>
      <path d="M12 8L12.01 8"></path>
    </Svg>
  );
}

function Warning(props: BuiltInIconProps) {
  return (
    <Svg {...props}>
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"></path>
      <path d="M12 9L12 13"></path>
      <path d="M12 17L12.01 17"></path>
    </Svg>
  );
}

function Error(props: BuiltInIconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M15 9L9 15"></path>
      <path d="M9 9L15 15"></path>
    </Svg>
  );
}

function Success(props: BuiltInIconProps) {
  return (
    <Svg {...props}>
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
      <path d="M22 4L12 14.01 9 11.01"></path>
    </Svg>
  );
}

function Icon({ type }: IconProps) {
  const iconProps = { type };

  if (type === "success") return Success(iconProps);
  else if (type === "error") return Error(iconProps);
  else if (type === "warning") return Warning(iconProps);
  else return Info(iconProps);
}

export default Icon;
