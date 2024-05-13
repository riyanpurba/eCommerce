import Head from "next/head";

import Header from "../Header";

const Layout = ({ children, meta }: any) => {
    const { title, description } = meta;
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout;