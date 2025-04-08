import React from 'react';

interface KaggleProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

export const Kaggle: React.FC<KaggleProps> = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="none"
      className={className}
      {...props}
    >
      <path 
        d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589v6.422c0 .26-.138.391-.422.391H6.375c-.281 0-.42-.131-.42-.391V.391C5.955.129 6.094 0 6.375 0h2.938c.281 0 .42.13.42.391v15.141h.055l4.699-5.688c.16-.193.31-.29.45-.29h3.197c.108 0 .189.026.23.08.042.052.03.113-.035.183L13.05 15.68l5.67 7.895c.067.104.076.21.026.284h.079z" 
        fill={color}
      />
    </svg>
  );
};

export default Kaggle;