import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/page1/page2">Page1 match</Link></li>
                <li><Link to="/page1?index=2">Page location</Link></li>
                <li><Link to="/posts" activeStyle={{color:'pink'}}>Post List</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;