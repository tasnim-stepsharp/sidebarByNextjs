import cn from "@/lib/cn";

interface ProjectSvgProps {
    className?: string;
    isActive?: boolean;
}

export default function ProjectSvg({ className = "", isActive = false }: ProjectSvgProps) {
    return (
        <div>
            <svg className={cn("size-4 stroke-[#141622] dark:stroke-white",
                className,
                 isActive && "stroke-[#3679FF] dark:stroke-[#3679FF]"
            )}
             width="18" 
             height="18" 
             viewBox="0 0 18 18" 
             fill="none" 
             xmlns="http://www.w3.org/2000/svg">
                <path d="M8.13397 1.85836C8.5566 1.61945 8.76795 1.5 9 1.5C9.23205 1.5 9.4434 1.61945 9.86603 1.85836L14.884 4.69487C15.3066 4.93378 15.518 5.05324 15.634 5.25C15.75 5.44676 15.75 5.68567 15.75 6.16349V11.8365C15.75 12.3143 15.75 12.5533 15.634 12.75C15.518 12.9467 15.3066 13.0662 14.884 13.3052L9.86603 16.1416C9.4434 16.3805 9.23205 16.5 9 16.5C8.76795 16.5 8.5566 16.3805 8.13397 16.1416L3.11602 13.3052C2.69338 13.0662 2.48205 12.9467 2.36603 12.75C2.25 12.5533 2.25 12.3143 2.25 11.8365V6.16349C2.25 5.68567 2.25 5.44676 2.36603 5.25C2.48205 5.05324 2.69338 4.93378 3.11602 4.69487L8.13397 1.85836Z"  stroke="inherit" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.625 3.20288L9.8505 4.16296C9.43522 4.38764 9.22762 4.49998 9 4.49998C8.77238 4.49998 8.56478 4.38764 8.1495 4.16296L6.375 3.20288"  stroke="inherit" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9 8.71155V16.5M9 8.71155L15.375 5.25M9 8.71155L2.625 5.25"  stroke="inherit" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.25 9L4.42082 10.1689C4.82426 10.3862 5.02597 10.4947 5.13799 10.6899C5.25 10.8851 5.25 11.128 5.25 11.6137V14.25"  stroke="inherit" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.75 9L13.5792 10.1689C13.1758 10.3862 12.974 10.4947 12.862 10.6899C12.75 10.8851 12.75 11.128 12.75 11.6137V14.25"  stroke="inherit" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    );
}
