import React from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './UserNavigation.css';

export default function UserNavigation({ page }) {
    return (
        <Tab.Container defaultActiveKey="home">
  <Nav variant="tabs">
    <Nav.Item>
      <Nav.Link as={Link} to="/account/personal-data" disabled={(page === 'personal-data') ? 'disabled' : ''}>Персональні дані</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={Link} to="/account/statistic" disabled={(page === 'statistic') ? 'disabled' : ''}>Статистика</Nav.Link>
    </Nav.Item>
  </Nav>
  </Tab.Container>
    )
}
