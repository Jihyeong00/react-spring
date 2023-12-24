import {PropsWithChildren} from "react";
import NavBar from "@/app/spring/_component/nav-bar";

export default function Layout({children}: PropsWithChildren) {
    return <div>
        <header className={'h-11'}>
            <NavBar/>
        </header>
        {children}
    </div>
}
