import cn from "@/lib/cn";

interface ShortCutSvgProps {
    className?: string;
    isActive?: boolean;
}

export default function ShortCutSvg({ className = "" }: ShortCutSvgProps) {
    return (
        <div>
            <svg className={cn("size-4", className)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.875 5.25H7.125C4.65939 5.25 3.42658 5.25 2.59682 5.93097C2.44492 6.05563 2.30563 6.19492 2.18097 6.34682C1.5 7.17658 1.5 8.40938 1.5 10.875C1.5 13.3406 1.5 14.5734 2.18097 15.4032C2.30563 15.5551 2.44492 15.6943 2.59682 15.819C3.42658 16.5 4.65939 16.5 7.125 16.5H10.875C13.3406 16.5 14.5734 16.5 15.4032 15.819C15.5551 15.6943 15.6943 15.5551 15.819 15.4032C16.5 14.5734 16.5 13.3406 16.5 10.875C16.5 8.40938 16.5 7.17658 15.819 6.34682C15.6943 6.19492 15.5551 6.05563 15.4032 5.93097C14.5734 5.25 13.3406 5.25 10.875 5.25Z" stroke="#141622" stroke-width="1.125" stroke-linecap="round" />
                <path d="M9 5.25V3.75C9 3.33579 9.33578 3 9.75 3C10.1642 3 10.5 2.66421 10.5 2.25V1.5" stroke="#141622" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.25 9H6" stroke="#141622" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.625 9H9.375" stroke="#141622" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 9H12.75" stroke="#141622" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.25 12.75H12.75" stroke="#141622" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    );
}
