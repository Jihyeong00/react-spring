"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";
import clsx from "clsx";

export default function NavBar() {
    const path = ["spring", "springs", "chain", "transition"];
    const pathName = usePathname().split("/")[2];

    return (<nav className={'mt-3'}>{path.map(href =>
        <Link key={href} className={clsx('border-2 m-1 p-2', {'bg-gray-500': pathName === href})}
              href={'/spring/' + href}>{href}</Link>
    )}</nav>)
}
