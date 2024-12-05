import cn from "@/lib/cn";

export default function LinkSvg() {
    return (
        <div>

            <svg className={cn(" stroke-[#141622] dark:stroke-white")} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 5.50002L10.6 1.40002" stroke="inherit" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.9999 3.4V1H8.59985" stroke="inherit" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.5 1H4.5C2 1 1 2 1 4.5V7.5C1 10 2 11 4.5 11H7.5C10 11 11 10 11 7.5V6.5" stroke="inherit" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    );
}
