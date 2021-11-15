import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../SidebarData/SidebarData";
import SubMenu from "../Submenu/SubMenu";
import { IconContext } from "react-icons/lib";
import "./Sidebar.css";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Nav>
        <NavIcon onClick={showSidebar}>
          <FaIcons.FaBars
            style={{ marginLeft: -20 }}
            className="text"
            size={20}
            className={"text"}
          />
          <Text className="text hide-on-med-and-down">menu</Text>
        </NavIcon>
      </Nav>
      <SidebarNav style={{ paddingTop: 50 }} sidebar={sidebar}>
        <SidebarWrap showSidebar={showSidebar}>
          <NavIcon
            onClick={showSidebar}
            style={{
              position: "fixed",
              background: "#1a237e",
              top: 10,
              width: 200,
              marginBottom: 30,
              alignItems: "center",
            }}
          >
            <AiIcons.AiOutlineClose size={25} style={{ fontWeight: "bold" }} />
            <span style={{ marginLeft: 20, fontSize: 20, fontWeight: "500" }}>
              close
            </span>
          </NavIcon>
          {SidebarData.map((item, index) => {
            return (
              <SubMenu item={item} key={index} showSidebar={showSidebar} />
            );
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;

const Nav = styled.div`
  /* background: #064757; */
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1rem;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  /* background: red; */
  background: linear-gradient(120deg, #064757 20%, #04afda);
  overflow: scroll;

  width: 280px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 999;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Text = styled.span`
  color: #e0e0e0;
  font-size: 15px;
  margin-left: 5px;

  &:hover {
    color: #fff;
    cursor: pointer;
    transition: 0.5s ease-in-out;
  }
`;
