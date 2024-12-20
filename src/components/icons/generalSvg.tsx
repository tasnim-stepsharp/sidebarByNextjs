import React from "react";
import cn from "../../lib/cn";

interface GeneralSvgProps {
    className?: string;
    isActive?: boolean;
}

export default function GeneralSvg({ className = "", isActive = false }: GeneralSvgProps) {
    return (
        <div>
            <svg className={cn("  stroke-[#141622] dark:stroke-white",
                className,
                 isActive && "stroke-[#3679FF] dark:stroke-[#3679FF]"
            )} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.625 9C11.625 10.4497 10.4497 11.625 9 11.625C7.55025 11.625 6.375 10.4497 6.375 9C6.375 7.55025 7.55025 6.375 9 6.375C10.4497 6.375 11.625 7.55025 11.625 9Z" stroke="inherit" stroke-width="1.125" />
                <path d="M15.5929 6.86401C16.1977 7.90635 16.5 8.42745 16.5 9C16.5 9.57255 16.1977 10.0936 15.5929 11.136L14.1502 13.6228C13.5478 14.661 13.2467 15.1802 12.7514 15.4651C12.2562 15.75 11.6551 15.75 10.453 15.75H7.54703C6.34487 15.75 5.7438 15.75 5.24855 15.4651C4.7533 15.1802 4.45214 14.661 3.84983 13.6228L2.40706 11.136C1.80235 10.0936 1.5 9.57255 1.5 9C1.5 8.42745 1.80235 7.90635 2.40706 6.864L3.84983 4.37716C4.45214 3.33897 4.7533 2.81988 5.24855 2.53494C5.7438 2.25 6.34487 2.25 7.54703 2.25H10.453C11.6551 2.25 12.2562 2.25 12.7514 2.53494C13.2467 2.81988 13.5478 3.33898 14.1502 4.37716L15.5929 6.86401Z" stroke="inherit" stroke-width="1.125" />
            </svg>
        </div>
    );
}
