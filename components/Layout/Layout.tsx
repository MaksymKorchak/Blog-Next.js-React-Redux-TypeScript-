import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {LayoutProps} from "../../interfaces";
import {A, NAV} from "./LayoutStyled";

const Layout:React.FC<LayoutProps>=({children,title='Posts app'})=>(
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <header>
            <NAV>
                <Link href="/"><A>Home Page</A></Link>
                <Link href="/posts/new"><A>Create New Post</A></Link>
            </NAV>

        </header>

        {children}

    </div>

);

export default Layout;
