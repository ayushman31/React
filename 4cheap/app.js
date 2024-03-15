import React from "react";
import  ReactDOM  from "react-dom/client";

/*
Header
    -Logo
    -Nav Items
Body
    -Search
    -RestrauntContainer
        -RestrauntCards
Footer
    -Copyright
    -Links
    -Address
    -Contact
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://raw.githubusercontent.com/ayushman31/react/main/4cheap/bha.png"></img>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// const styleCard = () => {
//     backgroundColor : "#f0f0f0"
// };

const Rescard = () => {
    return (
        <div className="card" style={{backgroundColor : "#f0f0f0"}}>
            <img className="res-logo" alt="image not found" src="https://imgs.search.brave.com/RQ2SUhlCTK7RH5hi_mt_FjX63accNTKw965IOWm9tsQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/YmFuZ2Fsb3JlL3cx/LzA4MHB4eDgwLnh4/ODAuMTkwMzI2MjIw/ODQxLnA3dzEvY2F0/YWxvZ3VlL21lZ2hh/bmEtZm9vZHMtYmFu/Z2Fsb3JlLWFuZGhy/YS1kZWxpdmVyeS1y/ZXN0YXVyYW50cy10/azh4cXB4emFxLmpw/Zz9jbHI9IzMzMzMz/Mw"></img>
            <h3>Meghana Foods !!</h3>
            <h4>Indian, Asian, Spicy</h4>
            <h4>4.5⭐</h4>
            <h5>38 mins ETA</h5>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search"> Search</div>
            <div className="res-container">
                <Rescard />
                <Rescard />
                <Rescard />
                <Rescard />
                <Rescard />
                <Rescard />
                <Rescard />
                <Rescard />
                <Rescard />
                <Rescard />
                <Rescard />
                <Rescard />
                <Rescard />
                <Rescard />
                <Rescard />
                <Rescard />
                <Rescard />
                <Rescard />
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">

            
            <Header />
            <Body/>

        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
