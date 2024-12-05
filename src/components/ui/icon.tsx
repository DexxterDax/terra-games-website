import { SimpleIcon } from "simple-icons"

// Helper function to render SVG icons
type Props = {
    icon: SimpleIcon
    className?: string
}

export function Icon({ icon, className = "" }: Props) {
    return (
        <svg
        role="img"
        viewBox="0 0 24 24"
        className={`w-5 h-5 ${className}`}
        fill="currentColor"
      >
        <path d={icon.path} />
      </svg>
    )
};
