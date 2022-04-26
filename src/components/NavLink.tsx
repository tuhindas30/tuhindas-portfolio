import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface NavLinkProps {
  children: ReactNode;
  to: string;
  activeClassName: string;
  className: string;
}

const NavLink = ({
  children,
  to,
  activeClassName,
  className,
}: NavLinkProps) => {
  const router = useRouter();
  const isSamePath = router.asPath === to;

  return (
    <Link href={to}>
      <a className={isSamePath ? `${className} ${activeClassName}` : className}>
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
