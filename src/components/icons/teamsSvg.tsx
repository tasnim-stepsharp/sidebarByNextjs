import cn from "@/lib/cn";

interface TeamsSvgProps {
    className?: string;
    isActive?: boolean;
}

export default function TeamsSvg({ className = "", isActive = false }: TeamsSvgProps) {
    return (
        <div>
            <svg className={cn("size-4", className)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5805 13.5C16.1425 13.5 16.5895 13.1464 16.9908 12.6518C17.8124 11.6396 16.4635 10.8306 15.949 10.4344C15.426 10.0317 14.842 9.80355 14.25 9.75M13.5 8.25C14.5355 8.25 15.375 7.41053 15.375 6.375C15.375 5.33947 14.5355 4.5 13.5 4.5" stroke={isActive ? "#3679FF" : "#141622 "} stroke-width="1.125" stroke-linecap="round" />
                <path d="M2.41947 13.5C1.85749 13.5 1.4105 13.1464 1.00916 12.6518C0.187568 11.6396 1.5365 10.8306 2.05098 10.4344C2.57398 10.0317 3.15794 9.80355 3.75 9.75M4.125 8.25C3.08947 8.25 2.25 7.41053 2.25 6.375C2.25 5.33947 3.08947 4.5 4.125 4.5" stroke={isActive ? "#3679FF" : "#141622 "} stroke-width="1.125" stroke-linecap="round" />
                <path d="M6.06285 11.3334C5.29652 11.8073 3.28724 12.7748 4.51103 13.9855C5.10884 14.577 5.77464 15 6.61172 15H11.3883C12.2254 15 12.8912 14.577 13.489 13.9855C14.7128 12.7748 12.7035 11.8073 11.9372 11.3334C10.1401 10.2222 7.85987 10.2222 6.06285 11.3334Z" stroke={isActive ? "#3679FF" : "#141622 "} stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.625 5.625C11.625 7.07475 10.4498 8.25 9.00002 8.25C7.55027 8.25 6.375 7.07475 6.375 5.625C6.375 4.17525 7.55027 3 9.00002 3C10.4498 3 11.625 4.17525 11.625 5.625Z" stroke={isActive ? "#3679FF" : "#141622 "} stroke-width="1.125" />
            </svg>

        </div>
    );
}