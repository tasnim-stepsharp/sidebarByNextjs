import cn from "@/lib/cn";

interface HelpSvgProps {
    className?: string;
    isActive?: boolean;
}

export default function HelpSvg({ className = "", isActive = false }: HelpSvgProps) {
    return (
        <div>
            <svg className={cn("size-4", className)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={cn("size-4", className)} d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="#141622" stroke-width="1.125" />
                <path d="M7.5 6.75C7.5 5.92157 8.17155 5.25 9 5.25C9.82845 5.25 10.5 5.92157 10.5 6.75C10.5 7.04861 10.4128 7.32685 10.2623 7.5606C9.81405 8.25728 9 8.92155 9 9.75V10.125" stroke="#141622" stroke-width="1.125" stroke-linecap="round" />
                <path d="M8.99414 12.75H9.00164" stroke="#141622" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    );
}
