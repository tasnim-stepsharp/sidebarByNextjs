import React from "react";
import cn from "../../lib/cn";

interface IssueSvgProps {
    className?: string;
    isActive?: boolean;
}

export default function IssueSvg({ className = "", isActive = false }: IssueSvgProps) {
    return (
        <div>
            <svg className={cn("  stroke-[#141622] dark:stroke-white",
                className,
                 isActive && "stroke-[#3679FF] dark:stroke-[#3679FF]"
            )} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 7.5C1.5 4.67157 1.5 3.25736 2.37868 2.37868C3.25736 1.5 4.67157 1.5 7.5 1.5H10.5C13.3284 1.5 14.7427 1.5 15.6213 2.37868C16.5 3.25736 16.5 4.67157 16.5 7.5C16.5 10.3284 16.5 11.7427 15.6213 12.6213C14.7427 13.5 13.3284 13.5 10.5 13.5H7.5C4.67157 13.5 3.25736 13.5 2.37868 12.6213C1.5 11.7427 1.5 10.3284 1.5 7.5Z" stroke="inherit" stroke-width="1.125" stroke-linecap="round" />
                <path d="M12 16.5C11.1175 16.023 10.0928 15.75 9 15.75C7.90717 15.75 6.88252 16.023 6 16.5" stroke="inherit" stroke-width="1.125" stroke-linecap="round" />
                <path d="M9 10.5H9.0075" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9 8.25V5.25" stroke="inherit" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    );
}
