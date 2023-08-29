import { Table, Card, CardBody, CardTitle, Col } from "reactstrap";
import Paging from "../../components/dashboard/Paging";

const Menu = () => {
  // For Dismiss Button with Alert
  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Card>
        <Col lg="12">
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-card-text me-2">검색어</i>
              <input type={"text"}></input>
            </CardTitle>
            <CardBody className="">
              <Table bordered hover>
                <thead>
                  <tr>
                    <th><input type={"checkbox"}></input></th>
                    <th>순번</th>
                    <th>메뉴명</th>
                    <th>메뉴내용</th>
                    <th>메뉴사용여부</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><input type={"checkbox"}></input></th>
                    <td>3</td>
                    <td>관리자</td>
                    <td>전체 관리자 권한</td>
                    <td>사용</td>
                  </tr>
                  <tr>
                    <th scope="row"><input type={"checkbox"}></input></th>
                    <td>2</td>
                    <td>일반사용자</td>
                    <td>일반 사용자 권한</td>
                    <td>사용</td>
                  </tr>
                  <tr>
                    <th scope="row"><input type={"checkbox"}></input></th>
                    <td>1</td>
                    <td>메뉴 관리자</td>
                    <td>메뉴 관리자 권한</td>
                    <td>미사용</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
          <Paging />
        </Col>
      </Card>

      {/* --------------------------------------------------------------------------------*/}
      {/* End Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};

export default Menu;
