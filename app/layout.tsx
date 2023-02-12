import {Open_Sans} from '@next/font/google'
import Link from "next/link";

import styles from './rootStyle.module.css'

const openSans = Open_Sans({
    subsets: ["latin"]
})

export default function RootLayout({children}) {
    return (
        <html lang="en" className={openSans.className}>
        <head/>
        <body>
        <header className={styles.header}>
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

