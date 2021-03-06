import Head from 'next/head';
import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Aaliyah</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}