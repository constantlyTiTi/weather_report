import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Header from './components/Header'
import Provider from '@/app/providers'
import AddressCombobox from '@/app/components/AddressCombobox'
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather Report App",
  description: "Generated Weather Report",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
        <Header> 
          <AddressCombobox/>
        </Header>
        <div className='h-screen max-w-lg mx-auto my-3'>
        <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
        </Provider>
        </body>
    </html>
  );
}
