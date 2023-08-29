import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const Forms = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            회원가입
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">이메일</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="hong@naver.com"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">비밀번호</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="비밀번호를 입력해주세요."
                  type="password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePasswordConfirm ">비밀번호 확인</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="비밀번호를 입력해주세요."
                  type="password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect ">권한</Label>
                <Input id="exampleSelect" name="select" type="select">
                  <option>일반이용자</option>
                  <option>관리자</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelectMulti">전화번호</Label>
                <Input
                  id="examplePhone"
                  name="phone"
                  placeholder="010-1234-1234"
                  type="phone"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">회원 설명</Label>
                <Input id="exampleText" name="text" type="textarea" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">사진업로드</Label>
                <Input id="exampleFile" name="file" type="file" />
                <FormText>
                  이미지 파일만 업로드 가능합니다. [ .jpg .bmp .gif ]
                </FormText>
              </FormGroup>
              {/* <FormGroup tag="fieldset">
                <legend>Radio Buttons</legend>
                <FormGroup check>
                  <Input name="radio1" type="radio" />{" "}
                  <Label check>
                    Option one is this and that—be sure to include why it's
                    great
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="radio1" type="radio" />{" "}
                  <Label check>
                    Option two can be something else and selecting it will
                    deselect option one
                  </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Input disabled name="radio1" type="radio" />{" "}
                  <Label check>Option three is disabled</Label>
                </FormGroup>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" /> <Label check>Check me out</Label>
              </FormGroup> */}
              <Button>회원가입</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
