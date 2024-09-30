import React from "react";
import IconProps from "../../../types/icon-type";

const ModalCloseIcon: React.FC<IconProps> = ({
  size = "20",
  ...attributes
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.48391 0.89479C6.84749 0.249027 6.0758 0.272224 5.47822 0.627571C5.28406 0.712457 5.09287 0.836139 4.91353 1.01999L0.752361 5.28598C0.392801 5.6553 0.249332 6.0696 0.25032 6.47215C0.248344 6.49575 0.249332 6.51946 0.24785 6.54316C0.249431 6.56423 0.248344 6.58581 0.25032 6.60688C0.248838 7.00993 0.391813 7.42555 0.752361 7.79508C2.18181 9.26002 3.62074 10.7116 5.10976 12.1107L0.507219 16.8286C-0.219311 17.5734 -0.0876006 18.5034 0.41444 19.1365C0.48064 19.4219 0.620947 19.7049 0.874783 19.9653L5.28031 24.482C5.83718 25.053 6.49998 25.1034 7.05844 24.8673C7.41247 24.8391 7.77223 24.6878 8.09533 24.3566L12.6737 19.6633C14.2964 21.1777 15.8793 22.7363 17.5195 24.2311C18.2566 24.9039 19.1497 24.7819 19.7698 24.3083C19.9213 24.2264 20.0708 24.1247 20.2113 23.9801L24.4948 19.5893C25.0441 19.0256 25.0999 18.3558 24.8791 17.7879C24.9223 17.34 24.7838 16.8661 24.3729 16.4527C22.7713 14.8411 21.0458 13.3839 19.2882 11.9616C20.4939 10.5311 21.697 9.09876 22.9038 7.66988C23.1025 7.43507 23.2224 7.18477 23.2881 6.93254C23.6699 6.25457 23.5866 5.35911 23.0263 4.78446L22.781 4.53365C22.5792 4.32711 22.3359 4.19086 22.0781 4.10902C20.7856 2.97602 19.5778 1.75115 18.3756 0.518981C17.7309 -0.14157 16.9452 -0.108346 16.3437 0.266146C16.1585 0.351032 15.9758 0.469549 15.8059 0.644994L11.6293 4.92617C10.2533 3.5763 8.83737 2.26958 7.48391 0.89479ZM17.1582 4.27636C17.8873 5.00883 18.6343 5.72175 19.4045 6.40955C18.2048 7.83337 17.0072 9.25921 15.8061 10.6814C15.6991 10.8077 15.6188 10.9393 15.5522 11.0731C14.8784 11.6938 14.647 12.7132 15.5612 13.4416C17.4387 14.94 19.2957 16.4573 21.0392 18.1142L18.684 20.5287C17.1538 19.0865 15.651 17.6133 14.0925 16.2017C13.9978 16.1164 13.901 16.048 13.8025 15.9878C13.1899 15.3639 12.1871 15.1442 11.3999 15.9513L6.62685 20.8447L4.05697 18.2099L8.83006 13.3166C9.52774 12.6012 9.43733 11.7128 8.9841 11.0826C8.89379 10.8998 8.76791 10.7218 8.58551 10.5565C7.15626 9.26286 5.78324 7.91076 4.42809 6.5382L6.28122 4.63829C7.53835 5.8587 8.82225 7.04944 10.0538 8.29832C10.1715 8.41795 10.2949 8.5079 10.4196 8.58377C11.0268 9.24655 12.0598 9.50354 12.8688 8.67504L17.1582 4.27636Z" fill="#6FABFF"/>
    </svg>
  );
};

export default ModalCloseIcon;
