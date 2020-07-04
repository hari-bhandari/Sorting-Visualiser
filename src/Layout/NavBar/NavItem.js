import React,{useState} from 'react';

const NavItem = (props) => {
    const [open, setOpen] = useState(false);
    if (props.play){
        return (
            <li className="nav-item-play">
                <a href="#" className="icon-button-play" onClick={() => setOpen(!open)}>
                    {props.icon}
                    <h1>Start</h1>
                    {console.log(props.icon)}
                </a>



                {open && props.children}
            </li>
        )
    }
    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
};

export default NavItem;