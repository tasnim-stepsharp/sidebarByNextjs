import cn from "@/lib/cn";

export default function ToggleButtonSvg() {
    return (
        <div>
            <svg className={cn("stroke-[#5F636E] dark:stroke-white")} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3334 8.33333L10.0001 4.99999L6.66675 8.33333" stroke="inherit" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.3334 11.6667L10.0001 15L6.66675 11.6667" stroke="inherit" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    );
}
