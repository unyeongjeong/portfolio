import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "대시보드",
    href: "/dashboard",
    icon: "bi bi-speedometer2",
  },
  {
    title: "회원가입",
    href: "/forms",
    icon: "bi bi-textarea-resize",
  },
  {
    title: "회원 관리",
    href: "/member",
    icon: "bi bi-people",
  },
  {
    title: "권한 관리",
    href: "/auth",
    icon: "bi bi-bell",
  },
  {
    title: "메뉴 관리",
    href: "/menu",
    icon: "bi bi-patch-check",
  },
  {
    title: "조직 관리",
    href: "/buttons",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "게시판 관리",
    href: "/table",
    icon: "bi bi-layout-split",
  },
  {
    title: "코드 관리",
    href: "/code",
    icon: "bi bi-card-text",
  },
  {
    title: "정산/통계 관리",
    href: "/grid",
    icon: "bi bi-columns",
  },
  {
    title: "로그 관리",
    href: "/log",
    icon: "bi bi-link",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          {/* <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://www.wrappixel.com/templates/ample-react-dashboard/?ref=33"
          >
            Upgrade To Pro
          </Button> */}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
