import React from 'react';
import Login from "./login";
import Logo from "./logo";
import Title from "./title"

const Header = () => {
    return (
        <section className="grid-xl">
            <div className="columns is-desktop is-vcentered relative">
                <Logo />
                <Title />
                <Login />
            </div>
        </section>
     );
}
 
export default Header;