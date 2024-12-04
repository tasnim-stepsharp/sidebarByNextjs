import cn from "@/lib/cn";

interface SecuritySvgProps {
    className?: string;
    isActive?: boolean;
}

export default function SecuritySvg({ className = "", isActive = false }: SecuritySvgProps) {
    return (
        <div>
            <svg className={cn("size-4", className)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.75 9.75C6.75 9.75 7.5 9.75 8.25 11.25C8.25 11.25 10.6324 7.5 12.75 6.75" stroke={isActive ? "#3679FF" : "#141622 "} stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.75 8.38748V6.21022C15.75 4.98022 15.75 4.36521 15.4469 3.96397C15.1438 3.56272 14.4586 3.36792 13.088 2.97833C12.1517 2.71215 11.3262 2.39147 10.6667 2.09872C9.76755 1.69957 9.318 1.5 9 1.5C8.682 1.5 8.23245 1.69957 7.33328 2.09872C6.67379 2.39147 5.84838 2.71214 4.912 2.97833C3.54145 3.36792 2.85616 3.56272 2.55308 3.96397C2.25 4.36521 2.25 4.98022 2.25 6.21022V8.38748C2.25 12.6064 6.04708 15.1376 7.9455 16.1395C8.40082 16.3798 8.62845 16.5 9 16.5C9.37155 16.5 9.59918 16.3798 10.0545 16.1395C11.9529 15.1376 15.75 12.6064 15.75 8.38748Z" stroke={isActive ? "#3679FF" : "#141622 "} stroke-width="1.125" stroke-linecap="round" />
            </svg>
        </div>
    );
}
