import {FC, PropsWithChildren} from "react";
import {Open_Sans} from '@next/font/google'
import Link from "next/link";

import './global.css';
import styles from './rootStyle.module.css'

const openSans = Open_Sans({
    subsets: ["latin"]
})

const RootLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <html lang="en" className={openSans.className}>
            <head/>
            <body>
                <header>
                <h1>
                    <Link href="/home" className={styles.homeLink}>Globomantics</Link>
                </h1>
                <h3>
                    <Link href="/blog" className={styles.menuBarLink}>Blog</Link>
                </h3>
                <h3>
                    <Link href="/settings" className={styles.menuBarLink}>Settings</Link>
                </h3>
                <h3>
                    <Link href="/conference" className={styles.menuBarLink}>Conference</Link>
                </h3>
                </header>
                {children}
            </body>
        </html>
    );
}

export default RootLayout;

