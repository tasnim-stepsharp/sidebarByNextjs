import cn from "@/lib/cn";

interface OauthAppsSvgProps {
    className?: string;
    isActive?: boolean;
}

export default function OauthAppsSvg({ className = "", isActive = false }: OauthAppsSvgProps) {
    return (
        <div>
            <svg className={cn("size-4", className)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.25 16.5C7.63635 16.5 7.05014 16.2524 5.8777 15.7571C2.95923 14.5243 1.5 13.9079 1.5 12.871C1.5 12.5807 1.5 7.54838 1.5 5.25M8.25 16.5V8.5161M8.25 16.5C8.5053 16.5 8.73472 16.4571 9 16.3714M15 5.25V8.625" stroke={isActive ? "#3679FF" : "#141622 "} stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.5 13.5004L14.1792 12.8212M16.5 13.5C16.5 11.8432 15.1568 10.5 13.5 10.5C11.8432 10.5 10.5 11.8432 10.5 13.5C10.5 15.1568 11.8432 16.5 13.5 16.5C15.1568 16.5 16.5 15.1568 16.5 13.5Z" stroke={isActive ? "#3679FF" : "#141622 "} stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.49444 7.26853L3.30354 6.20839C2.10118 5.62658 1.5 5.33567 1.5 4.875C1.5 4.41433 2.10118 4.12342 3.30354 3.54161L5.49444 2.48146C6.84662 1.82716 7.52273 1.5 8.25 1.5C8.97727 1.5 9.6534 1.82715 11.0056 2.48146L13.1965 3.54161C14.3988 4.12342 15 4.41433 15 4.875C15 5.33567 14.3988 5.62658 13.1965 6.20839L11.0056 7.26853C9.6534 7.92285 8.97727 8.25 8.25 8.25C7.52273 8.25 6.84662 7.92285 5.49444 7.26853Z" stroke={isActive ? "#3679FF" : "#141622 "} stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.75 9L5.25 9.75" stroke={isActive ? "#3679FF" : "#141622 "} stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 3L4.5 6.75" stroke={isActive ? "#3679FF" : "#141622 "} stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    );
}
