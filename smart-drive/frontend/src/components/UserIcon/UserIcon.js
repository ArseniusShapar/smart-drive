import { React, useState} from 'react';
import { Nav, NavDropdown, Image} from 'react-bootstrap';
import { FaUser, FaSignInAlt, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';
import { PiUserListFill } from "react-icons/pi";
import { IoBarChart } from "react-icons/io5";
import './UserIcon.css';

export default function UserIcon({ user, handleLogout }) {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => setShowDropdown(true);
    const handleMouseLeave = () => setShowDropdown(false);

    const handleRegister = () => {
        document.querySelector('.form-container-register').style.display = 'block';
    }

    const handleLogin = () => {
        document.querySelector('.form-container-login').style.display = 'block';
    }

    if (user.username === '') {
        return (
            <Nav>
                <NavDropdown
                title={<FaUser size={30} />}
                id="user-nav-dropdown" >
                    <NavDropdown.Item onClick={handleRegister}>
                        <FaUserPlus className="mr-2" /> Зареєструватися
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={handleLogin}>
                        <FaSignInAlt className="mr-2"/> Увійти
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
        )
    }
    else {
        return (
            <Nav>
                <NavDropdown
                show={showDropdown} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                title={<button onClick={() => window.location.href = '/account/personal-data'}><Image className="logo-image rounded-circle" src="../img/user.jpg" alt='user'/></button>}
                id="user-nav-dropdown" >
                    <NavDropdown.ItemText>
                        {user.username}
                    </NavDropdown.ItemText>
                    <NavDropdown.Item href="/account/personal-data">
                        <PiUserListFill className="mr-2"/> Персональні дані 
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/account/statistic">
                        <IoBarChart className="mr-2" /> Статистика
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={handleLogout}>
                        <FaSignOutAlt className="mr-2" /> Вийти
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
        )
    }
}

