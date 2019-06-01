import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

class AdminNav extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand><Link to="/admin">Admin's Page</Link></NavbarBrand>
            <Nav className="ml-auto" navbar>
                <Link to="/admin/chcarousel">Change Carousel</Link>
                <Link to="/admin/upcontent">Update Content</Link>
                <Link to="/admin/chlogo">Change Logo</Link>
                <Link to="/">Logout</Link>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default AdminNav;