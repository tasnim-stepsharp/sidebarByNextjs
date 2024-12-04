import cn from "@/lib/cn";

interface NotificationSvgProps {
    className?: string;
    isActive?: boolean;
}

export default function NotificationSvg({ className = "", isActive = false }: NotificationSvgProps) {
    return (
        <div>
            <svg className={cn("size-4", className)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.89744 11.0772C1.73795 12.1227 2.451 12.8484 3.32404 13.21C6.67111 14.5966 11.3289 14.5966 14.6759 13.21C15.549 12.8484 16.262 12.1227 16.1026 11.0772C16.0046 10.4347 15.5199 9.89963 15.1608 9.37718C14.6905 8.68448 14.6438 7.92885 14.6437 7.125C14.6437 4.0184 12.1169 1.5 9 1.5C5.8831 1.5 3.35635 4.0184 3.35635 7.125C3.35627 7.92885 3.30954 8.68448 2.83921 9.37718C2.48013 9.89963 1.99546 10.4347 1.89744 11.0772Z" stroke={isActive ? "#3679FF" : "#141622 "} stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 14.25C6.34387 15.5439 7.55663 16.5 9 16.5C10.4434 16.5 11.6561 15.5439 12 14.25" stroke={isActive ? "#3679FF" : "#141622 "} stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    );
}