import React from "react";
import IconProps from "../../../types/icon-type";

const ImportCheckIcon: React.FC<IconProps> = ({
  size = "15",
  color = "#33BD49",
  ...attributes
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.32612 13.9469C7.44247 9.26293 11.6727 5.69282 15.9029 2.10269C16.4809 1.60777 17.0588 1.09189 17.8423 0.967747C18.7298 0.822656 19.5141 1.02901 19.8857 1.97855C20.2774 2.98934 19.5971 3.23763 18.833 3.58826C17.0169 4.43464 15.6756 5.96132 14.2311 7.28157C11.817 9.48934 9.31968 11.615 7.52462 14.3797C6.82335 15.4735 6.10111 16.5464 5.83269 17.8466C5.72951 18.4036 5.58523 18.9195 4.96617 19.0436C4.24393 19.2089 3.83123 18.693 3.48059 18.1973C2.55201 16.7939 1.82977 15.2873 1.21071 13.7396C0.798006 12.6869 0.467511 11.594 0.0967361 10.5201C-0.04755 10.1284 -0.0685072 9.73581 0.303089 9.50931C0.777866 9.19978 1.21071 9.44725 1.47914 9.83981C1.87088 10.3968 2.20137 10.9957 2.5109 11.5938C2.96471 12.4603 3.2533 13.4308 4.32617 13.9466L4.32612 13.9469Z" fill={color}/>
    </svg>
  );
};

export default ImportCheckIcon;
