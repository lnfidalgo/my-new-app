import Link from "next/link";

interface NavLiProps {
  liName: string
  linkHref: string
}

export function NavLi({liName, linkHref}: NavLiProps) {
  return (
    <li className="after:w-0 after:h-0.5 after:bg-[#5f5ddf] after:relative after:block after:transition-all hover:after:px-1 hover:after:w-full transition ease-in duration-200 hover:-translate-y-1 hover:scale-110">
      <Link href={linkHref}>{liName}</Link>
    </li>
  );
}