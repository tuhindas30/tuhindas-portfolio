import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ children, to, activeClassName, className }) => {
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
