import React from "react";
import IconProps from "../../../types/icon-type";

const BtnContnueIcon: React.FC<IconProps> = ({
  size = "15",
  ...attributes
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_7032_105878)">
            <path d="M15.5379 7.25513L15.5007 7.23848L9.44315 0.50784C9.31248 0.362609 9.16405 0.289062 9.00142 0.289062C8.65309 0.289062 8.3169 0.630318 8.29553 1.00479L8.28477 1.06247C8.27851 1.08802 8.27169 1.11342 8.26886 1.14153C8.18016 1.99929 8.16143 2.83679 8.15521 3.54317L8.1535 3.73502H0.809421C0.398901 3.73502 0.245143 4.004 0.189918 4.16416L0.177703 4.20017L0.152753 4.22862C0.051315 4.34444 0 4.49023 0 4.66231V11.3361C0 11.5082 0.051315 11.6542 0.152604 11.7697L0.177554 11.7983L0.189769 11.8342C0.244956 11.9946 0.398715 12.2635 0.809235 12.2635H8.1535L8.15521 12.4554C8.16143 13.1617 8.18016 13.9994 8.26886 14.8564C8.27169 14.8848 8.27851 14.9101 8.28477 14.9358L8.29553 14.9939C8.31668 15.3683 8.65313 15.7092 9.00142 15.7092C9.16386 15.7092 9.31233 15.6355 9.44315 15.4903L15.5007 8.75954L15.5379 8.74289C15.8224 8.61524 16.0162 8.30701 15.999 8.01015L15.9982 7.9992L15.999 7.98795C16.0162 7.69101 15.8224 7.38293 15.5379 7.25513ZM9.55226 13.3058L9.54411 12.8133C9.53729 12.3998 9.53465 11.9862 9.53465 11.5721C9.53427 11.1149 9.1871 10.9099 8.84275 10.9099V10.717L8.83843 10.9099L8.81423 10.9103L8.79117 10.9045C8.72459 10.8881 8.6662 10.8806 8.60718 10.8806H1.38297V5.11774H8.60714C8.66654 5.11774 8.72455 5.11018 8.79076 5.0939L8.81423 5.08836H8.83806C9.18713 5.08836 9.53431 4.88365 9.53468 4.42633C9.53468 4.0123 9.53733 3.59855 9.54414 3.1849L9.5523 2.69249L14.3282 7.99912L9.55226 13.3058Z" fill="white"/>
        </g>
        <defs>
            <clipPath id="clip0_7032_105878">
                <rect width="16" height="16" fill="white"/>
            </clipPath>
        </defs>
    </svg>
  );
};

export default BtnContnueIcon;
