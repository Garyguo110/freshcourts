import React from "react";
import { useSession } from "./FreshContext";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CourtsDisplay = props => {
  const allCourts = []
  const courts = props.courts;
  if (courts === undefined) {
    return(
      <h1>...Loading</h1>
    )
  }
  console.log('courts found.')
  for (const court of courts) {
    allCourts.push(
      <h1>{court.name}</h1>
    );
  }
  return (
    <Row className="justify-content-md-center bottom-buffer">{allCourts}</Row>
  );
}

const AllCourts = () => {
  const { sessionData, actions } = useSession();
  return (
    <Container className="p-3 text-center">
        <Row>
          <button onClick={() => actions.refresh()}>Refresh</button>
        </Row>
        <Row><Col><CourtsDisplay {...sessionData} /></Col></Row>
    </Container>
  );
};

export default AllCourts;