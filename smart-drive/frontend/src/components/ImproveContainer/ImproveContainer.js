import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import './ImproveContainer.css';

export default function ImproveContainer() {
  return (
    <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
      <Row>
        <Col>
          <Card style={{ width: '18rem', height: '27rem', marginLeft: '7em'}}>
            <Card.Img variant="top" src="./img/handbooks-card-image.png" />
            <Card.Body>
              <Card.Title>Довідники</Card.Title>
              <Card.Text>
                Здобувайте необхідні знання.
              </Card.Text>
              <Button variant="primary" href='/handbooks'>Читати ПДР</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', height: '27rem', marginLeft: '3.5em', marginRight: '3.5em' }}>
            <Card.Img variant="top" src="./img/courses-card-image.png"/>
            <Card.Body>
              <Card.Title>Курси</Card.Title>
              <Card.Text>
                Переглядайте навчальні уроки
              </Card.Text>
              <Button variant="primary" href='/courses'>Пройти навчання</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', height: '27rem', marginRight: '7em' }}>
            <Card.Img variant="top" src="./img/tests-card-image.png" />
            <Card.Body>
              <Card.Title>Тести</Card.Title>
              <Card.Text>
                Проходьте тести
              </Card.Text>
              <Button variant="primary" href='/tests'>Розпочати тестування</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}