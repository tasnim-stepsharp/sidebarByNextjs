import cn from "@/lib/cn";

interface ViewsSvgProps {
    className?: string;
    isActive?: boolean;
}

export default function ViewsSvg({ className = "", isActive = false }: ViewsSvgProps) {
    return (
        <div>
            <svg className={cn("size-4 stroke-[#141622] dark:stroke-white",
                className,
                 isActive && "stroke-[#3679FF] dark:stroke-[#3679FF]"
            )} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.48223 2.35919L5.20362 2.95021C3.23454 3.86039 2.25 4.31548 2.25 5.0625C2.25 5.80952 3.23454 6.26461 5.20363 7.17478L6.48223 7.7658C7.7214 8.33857 8.34105 8.625 9 8.625C9.65895 8.625 10.2786 8.33857 11.5178 7.7658L12.7964 7.17478C14.7655 6.26461 15.75 5.80952 15.75 5.0625C15.75 4.31548 14.7655 3.86039 12.7964 2.95021L11.5178 2.35919C10.2786 1.7864 9.65895 1.5 9 1.5C8.34105 1.5 7.7214 1.7864 6.48223 2.35919Z"  stroke="inherit" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.591 8.32288C15.697 8.4719 15.75 8.6273 15.75 8.79815C15.75 9.5345 14.7655 9.98315 12.7964 10.8804L11.5178 11.463C10.2786 12.0276 9.65895 12.31 9 12.31C8.34105 12.31 7.7214 12.0276 6.48223 11.463L5.20363 10.8804C3.23454 9.98315 2.25 9.5345 2.25 8.79815C2.25 8.6273 2.303 8.4719 2.409 8.32288"  stroke="inherit" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.2825 12.1996C15.5941 12.4478 15.75 12.6953 15.75 12.9882C15.75 13.7246 14.7655 14.1732 12.7964 15.0704L11.5178 15.653C10.2786 16.2177 9.65895 16.5 9 16.5C8.34105 16.5 7.7214 16.2177 6.48223 15.653L5.20363 15.0704C3.23454 14.1732 2.25 13.7246 2.25 12.9882C2.25 12.6953 2.40583 12.4478 2.7175 12.1996"  stroke="inherit" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    );
}
