import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { FaBook, FaGraduationCap, FaClipboard } from 'react-icons/fa';
import UserIcon from '../UserIcon/UserIcon';
import './Navibar.css'; 

export default function Navibar({ user, handleLogout }) {
  return (
    <Navbar bg="my-color" expand="lg" variant="light" className="custom-navbar">
      <Container fluid className="d-flex justify-content-between align-items-center">
        <UserIcon user={user} handleLogout={handleLogout}/>
        <Navbar.Brand href="/home" className="logo-brand">
          <Image
            src="../img/icon.png"
            alt="Логотип"
            className="logo-image"
          />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/handbooks" className="nav-icon-link">
            <FaBook size={30} />
            <div className="nav-icon-text">Довідники</div>
          </Nav.Link>
          <Nav.Link href="/courses" className="nav-icon-link">
            <FaGraduationCap size={30} />
            <div className="nav-icon-text">Курси</div>
          </Nav.Link>
          <Nav.Link href="/tests" className="nav-icon-link">
            <FaClipboard size={30} />
            <div className="nav-icon-text">Тести</div>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
