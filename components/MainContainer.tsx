import { FC } from "react";
import A from '../components/A';
import Head from 'next/head';

const MainContainer: FC<any> = ({children, title}) => {
    return (
        <>
            <Head>
                <meta keywords="ssr next react egor gnida"></meta>
                <title>{title}</title>
            </Head>
            <nav className="navbar">
                <A href="/" value="main"></A>
                <A href="/rings" value="rings"></A>
            </nav>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar{
                        background: orange;
                        padding: 12px;
                        margin-bottom: 10px;
                    }
                `}
            </style>
        </>
    );
};

export default MainContainer;