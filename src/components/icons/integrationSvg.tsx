import React from "react";
import cn from "../../lib/cn";

interface IntegrationSvgProps {
    className?: string;
    isActive?: boolean;
}

export default function IntegrationSvg({ className = "", isActive = false }: IntegrationSvgProps) {
    return (
        <div>
            <svg className={cn("  stroke-[#141622] dark:stroke-white",
                className,
                 isActive && "stroke-[#3679FF] dark:stroke-[#3679FF]"
            )} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.25 3.75H13.5" stroke="inherit" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.5 7.5L10.875 10.875" stroke="inherit" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.75 8.25V13.5" stroke="inherit" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.83333 8.16666C6.67428 8.16666 8.16666 6.67428 8.16666 4.83333C8.16666 2.99238 6.67428 1.5 4.83333 1.5C2.99238 1.5 1.5 2.99238 1.5 4.83333C1.5 6.67428 2.99238 8.16666 4.83333 8.16666Z" stroke="inherit" stroke-width="1.125" />
                <path d="M3.75 16.5C4.57843 16.5 5.25 15.8284 5.25 15C5.25 14.1716 4.57843 13.5 3.75 13.5C2.92157 13.5 2.25 14.1716 2.25 15C2.25 15.8284 2.92157 16.5 3.75 16.5Z" stroke="inherit" stroke-width="1.125" />
                <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" stroke="inherit" stroke-width="1.125" />
                <path d="M15 5.25C15.8284 5.25 16.5 4.57843 16.5 3.75C16.5 2.92157 15.8284 2.25 15 2.25C14.1716 2.25 13.5 2.92157 13.5 3.75C13.5 4.57843 14.1716 5.25 15 5.25Z" stroke="inherit" stroke-width="1.125" />
            </svg>
        </div>
    );
}
