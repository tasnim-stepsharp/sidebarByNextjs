import cn from "@/lib/cn";

interface ApikeySvgProps {
    className?: string;
    isActive?: boolean;
}

export default function ApikeySvg({ className = "", isActive = false }: ApikeySvgProps) {
    return (
        <div>

            <svg className={cn("size-4", className)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.625 10.875C14.1103 10.875 16.125 8.86027 16.125 6.375C16.125 3.88972 14.1103 1.875 11.625 1.875C9.13973 1.875 7.125 3.88972 7.125 6.375C7.125 7.03531 7.26722 7.66237 7.52273 8.22727L1.875 13.875V16.125H4.125V14.625H5.625V13.125H7.125L9.77273 10.4773C10.3376 10.7328 10.9647 10.875 11.625 10.875Z" stroke={isActive ? "#3679FF" : "#141622 "} stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.125 4.875L12.375 5.625" stroke={isActive ? "#3679FF" : "#141622 "} stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    );
}
