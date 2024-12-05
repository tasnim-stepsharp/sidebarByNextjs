import cn from "@/lib/cn";

interface LibrarySvgProps {
    className?: string;
    isActive?: boolean;
}

export default function LibrarySvg({ className = "", isActive = false }: LibrarySvgProps) {
    return (
        <div>
            <svg className={cn("size-4 stroke-[#141622] dark:stroke-white",
                className,
                 isActive && "stroke-[#3679FF] dark:stroke-[#3679FF]"
            )} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.197 7.875H5.80294C3.86678 7.875 2.89871 7.875 2.45357 8.51445C2.00845 9.1539 2.33928 10.0693 3.00095 11.9002L3.81409 14.1503C4.15909 15.1049 4.33159 15.5822 4.71668 15.8536C5.10176 16.125 5.60654 16.125 6.61607 16.125H11.384C12.3935 16.125 12.8982 16.125 13.2833 15.8536C13.6684 15.5822 13.8409 15.1049 14.186 14.1503L14.999 11.9002C15.6607 10.0693 15.9916 9.1539 15.5464 8.51445C15.1013 7.875 14.1332 7.875 12.197 7.875Z" stroke="inherit" stroke-width="1.125" stroke-linecap="square" />
                <path d="M14.25 6C14.25 5.65055 14.25 5.47582 14.1929 5.33799C14.1168 5.15422 13.9708 5.00821 13.787 4.93209C13.6492 4.875 13.4744 4.875 13.125 4.875H4.875C4.52555 4.875 4.35082 4.875 4.21299 4.93209C4.02922 5.00821 3.88321 5.15422 3.80709 5.33799C3.75 5.47582 3.75 5.65055 3.75 6" stroke="inherit" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.375 3C12.375 2.65055 12.375 2.47582 12.3179 2.33799C12.2418 2.15422 12.0958 2.00821 11.912 1.93209C11.7742 1.875 11.5994 1.875 11.25 1.875H6.75C6.40055 1.875 6.22582 1.875 6.08799 1.93209C5.90422 2.00821 5.75821 2.15422 5.68209 2.33799C5.625 2.47582 5.625 2.65055 5.625 3" stroke="inherit" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    );
}
