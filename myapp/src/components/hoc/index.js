import React from 'react';
import Header from './header';

const Layout = (props) => {
    return (
        <div>
            <Header />
            <div className="page_container">
                    {props.children}
            </div>
        </div>
    );
};

export default Layout;