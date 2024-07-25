import { FaExclamationTriangle } from "react-icons/fa";

interface FormErrorProps {
  message?: string;
}

export function FormError({ message }: FormErrorProps) {
  if (!message) return null;

  return (
    <div className="flex items-center gap-x-2 text-sm text-destructive bg-destructive/15 p-3 rounded-md">
      <FaExclamationTriangle className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
}
