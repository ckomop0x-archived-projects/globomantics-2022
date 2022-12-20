import { Open_Sans } from '@next/font/google'

const openSans = Open_Sans({
    subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <head />
      <body>{children}</body>
    </html>
  );
}

