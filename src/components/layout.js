import React from 'react';

import Header from './header';
import '../styles/layout.css';
import Footer from './footer';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout;