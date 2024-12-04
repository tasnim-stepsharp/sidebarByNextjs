
import cn from "@/lib/cn";

interface BillingSvgProps {
    className?: string;
    isActive?: boolean;
}

export default function BillingSvg({ className = "", isActive = false }: BillingSvgProps) {
    return (
        <div>
            <svg className={cn("size-4", className)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.012 1.5C14.177 1.5 13.5 3.51472 13.5 6H15.012C15.7407 6 16.105 6 16.3306 5.74841C16.5562 5.49682 16.5169 5.1655 16.4384 4.50286C16.2311 2.75357 15.6707 1.5 15.012 1.5Z" stroke={isActive ? "#3679FF" : "#141622 "} stroke-width="1.125" />
                <path d="M13.5 6.0407V13.9843C13.5 15.1181 13.5 15.685 13.1535 15.9081C12.5873 16.2728 11.7121 15.5081 11.2718 15.2305C10.9081 15.0011 10.7263 14.8864 10.5244 14.8798C10.3063 14.8726 10.1212 14.9826 9.72817 15.2305L8.295 16.1343C7.90838 16.378 7.7151 16.5 7.5 16.5C7.28491 16.5 7.09159 16.378 6.705 16.1343L5.27185 15.2305C4.90811 15.0011 4.72624 14.8864 4.5244 14.8798C4.30629 14.8726 4.1212 14.9826 3.72815 15.2305C3.28796 15.5081 2.41265 16.2728 1.84646 15.9081C1.5 15.685 1.5 15.1181 1.5 13.9843V6.0407C1.5 3.90019 1.5 2.82994 2.15901 2.16497C2.81802 1.5 3.87868 1.5 6 1.5H15" stroke={isActive ? "#3679FF" : "#141622 "} stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.5 4.5H10.5" stroke={isActive ? "#3679FF" : "#141622 "} stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 7.5H4.5" stroke={isActive ? "#3679FF" : "#141622 "} stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.375 8.15625C8.7537 8.15625 8.25 8.59695 8.25 9.14062C8.25 9.6843 8.7537 10.125 9.375 10.125C9.9963 10.125 10.5 10.5657 10.5 11.1094C10.5 11.6531 9.9963 12.0938 9.375 12.0938M9.375 8.15625C9.86483 8.15625 10.2815 8.43015 10.436 8.8125M9.375 8.15625V7.5M9.375 12.0938C8.88517 12.0938 8.46847 11.8199 8.31405 11.4375M9.375 12.0938V12.75" stroke={isActive ? "#3679FF" : "#141622 "} stroke-width="1.125" stroke-linecap="round" />
            </svg>
        </div>
    );
}
