import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import NavMenu from 'rsuite/esm/Nav/NavMenu';
import { useState } from 'react';

const CustomNavbar = ({ onSelect, activeKey, ...props }) => {
  return (
    <Navbar {...props}>
      <Navbar.Brand href="#">RSUITE</Navbar.Brand>
      <Nav onSelect={onSelect} activeKey={activeKey}>
        <Nav.Item eventKey="1">Home</Nav.Item>
        <Nav.Item eventKey="2">News</Nav.Item>
        <Nav.Item eventKey="3">Products</Nav.Item>
        <Nav.Menu title="About">
          <Nav.Item eventKey="4">Company</Nav.Item>
          <Nav.Item eventKey="5">Team</Nav.Item>
          <Nav.Item eventKey="6">Contact</Nav.Item>
        </Nav.Menu>
      </Nav>
      <Nav pullRight>
        <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
      </Nav>
    </Navbar>
  );
};

const NavMenu1 = () => {
  const [activeKey, setActiveKey] = useState(null);

  return (
    <>
      <CustomNavbar activeKey={activeKey} onSelect={setActiveKey} />
      <hr />
      <CustomNavbar appearance="inverse" activeKey={activeKey} onSelect={setActiveKey} />
      <hr />
      <CustomNavbar appearance="subtle" activeKey={activeKey} onSelect={setActiveKey} />
    </>
  );
};

export default NavMenu1