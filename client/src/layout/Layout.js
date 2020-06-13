import React from 'react';
import Navigation from '../Navigation/Navigation';

const Layout = ({title,children}) => {
    return(
        <div>
            <Navigation/>
            <p>{title}</p>
            <p>
                {children}
            </p>
        </div>
    )
}

export default Layout;