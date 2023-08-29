import Paging from "../../components/dashboard/Paging";
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const Code = () => {
  return (
    <Row>
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            <input type={"text"}></input>
          </CardTitle>
          <CardBody className="">
            <Table bordered hover>
              <thead>
                <tr>
                  <th><input type={"checkbox"}></input></th>
                  <th>순번</th>
                  <th>제목</th>
                  <th>내용</th>
                  <th>조회수</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"><input type={"checkbox"}></input></th>
                  <td>3</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>13</td>
                </tr>
                <tr>
                  <th scope="row"><input type={"checkbox"}></input></th>
                  <td>2</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>25</td>
                </tr>
                <tr>
                  <th scope="row"><input type={"checkbox"}></input></th>
                  <td>1</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>64</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
        <Paging />
      </Col>
    </Row>
  );
};

export default Code;
