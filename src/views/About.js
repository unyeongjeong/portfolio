import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import ProjectTables from "../components/dashboard/ProjectTable";
import Paging from "../components/dashboard/Paging";

const About = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            About Xtreme React
          </CardTitle>
          <ProjectTables />
          <Paging />
          <CardBody className="p-4">
            {/* <Row justify-content>
              <Col lg="8">
                <h2 className="mt-4">Ample React Admin Pro Version</h2>
                <h5 className=" mb-4">
                  5 premium and highly customizable demo variations included in
                  the package, with React Router 6, Redux Toolkit, Axios nd much
                  more...
                </h5>
                <img
                  src="https://www.wrappixel.com/wp-content/uploads/edd/2020/09/ample-react-admin-template-y.png"
                  alt="my"
                />
                <Button
                  className="mt-3"
                  color="primary"
                  href="https://www.wrappixel.com/templates/ample-react-dashboard/?ref=33"
                  target="_blank"
                >
                  Check Pro Version
                </Button>
              </Col>
            </Row> */}
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default About;
