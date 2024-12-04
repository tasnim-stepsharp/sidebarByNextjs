import cn from "@/lib/cn";

interface InboxSvgProps {
  className?: string; 
  isActive?: boolean; 
}

export default function InboxSvg({ className = "", isActive = false }: InboxSvgProps) {
  return (
    <div>
      <svg
        className={cn("size-4", className)}
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.875 9C1.875 5.64124 1.875 3.96187 2.91843 2.91843C3.96187 1.875 5.64124 1.875 9 1.875C12.3587 1.875 14.0381 1.875 15.0816 2.91843C16.125 3.96187 16.125 5.64124 16.125 9C16.125 12.3587 16.125 14.0381 15.0816 15.0816C14.0381 16.125 12.3587 16.125 9 16.125C5.64124 16.125 3.96187 16.125 2.91843 15.0816C1.875 14.0381 1.875 12.3587 1.875 9Z"
          stroke={isActive ? "#3679FF" : "#141622 "}
          strokeWidth="1.125"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.125 10.125H12.4307C11.7992 10.125 11.303 10.6527 11.0246 11.2104C10.7222 11.8163 10.1167 12.375 9 12.375C7.88333 12.375 7.2778 11.8163 6.9754 11.2104C6.69706 10.6527 6.20083 10.125 5.56925 10.125H1.875"
          stroke={isActive ? "#3679FF" : "#141622 "}
          strokeWidth="1.125"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
