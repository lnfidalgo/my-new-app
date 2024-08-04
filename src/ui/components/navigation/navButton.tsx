interface NavButtonProps {
  buttonName: string;
}

export function NavButton({ buttonName }: NavButtonProps) {
  return (
    <button className="px-4 py-2 rounded-xl bg-[#435CF0]  transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110 hover:bg-[#304df1]">
      {buttonName}
    </button>
  );
}
