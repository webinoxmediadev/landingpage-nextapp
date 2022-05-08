import Head from 'next/head'
import Header from '../components/Header'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            { children }
        </>
    )
}

export default Layout;