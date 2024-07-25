import { FaCheckCircle } from "react-icons/fa";

interface FormErrorProps {
  message?: string;
}

export function FormSuccess({ message }: FormErrorProps) {
  if (!message) return null;

  return (
    <div className="flex items-center gap-x-2 text-sm text-emerald-500 bg-emerald-500/15 p-3 rounded-md">
      <FaCheckCircle className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
}
