import React from "react";
import cn from "../../lib/cn";

interface DomainSvgProps {
    className?: string;
    isActive?: boolean;
}

export default function DomainSvg({ className = "", isActive = false }: DomainSvgProps) {
    return (
        <div>
            <svg className={cn("  stroke-[#141622] dark:stroke-white",
                className,
                 isActive && "stroke-[#3679FF] dark:stroke-[#3679FF]"
            )} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="inherit" stroke-width="1.125" />
                <path d="M6 9C6 13.5 9 16.5 9 16.5C9 16.5 12 13.5 12 9C12 4.5 9 1.5 9 1.5C9 1.5 6 4.5 6 9Z" stroke="inherit" stroke-width="1.125" stroke-linejoin="round" />
                <path d="M15.75 11.25H2.25" stroke="inherit" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.75 6.75H2.25" stroke="inherit" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    );
}
