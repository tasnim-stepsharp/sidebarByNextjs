import React from "react";
import cn from "../../lib/cn";

export default function ApiDocSvg() {
    return (
        <div>
            <svg className={cn("stroke-[#141622] dark:stroke-white")} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.75 6L14.1298 7.38756C14.71 7.97092 15 8.2626 15 8.625C15 8.9874 14.71 9.27908 14.1298 9.86243L12.75 11.25" stroke="inherit" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.25 6L3.87014 7.38756C3.29005 7.97092 3 8.2626 3 8.625C3 8.9874 3.29005 9.27908 3.87014 9.86243L5.25 11.25" stroke="inherit" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.875 3L7.125 15" stroke="inherit" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </div>
    );
}
