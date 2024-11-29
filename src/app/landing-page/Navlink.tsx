'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({
  href,
  partial,
  activeClassName,
  ...props
}: {
  href: string;
  activeClassName?: string;
  partial?: string;
} & React.HTMLAttributes<HTMLAnchorElement>) => {
  // ! hooks
  const [isMatch, setMatch] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    if (partial) {
      const regex = new RegExp(partial);
      setMatch(regex.test(pathname));
    } else {
      setMatch(pathname === href);
    }
  }, [pathname]);

  const { className, children, ...p } = props;

  return (
    <Link
      className={
        className + (isMatch && activeClassName ? ' ' + activeClassName : '')
      }
      href={href}
      {...p}
    >
      {children}
    </Link>
  );
};

export default NavLink;
