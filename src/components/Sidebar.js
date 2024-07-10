import React from 'react';
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarFooter,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import logo from '../assets/logo-estin.png';

const Sidebar = () => {
  return (
    <CDBSidebar textColor="#333" backgroundColor="#FFF"  >
      <CDBSidebarHeader prefix={<i className="fa fa-bars" style={{ color: '#34495e', position: 'relative', top: '23px', left: '3px' }} />}>
        <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="ESTIN Logo" className='navbar-logo' />
        </div>
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <NavLink exact to="/" ClassName="activeClicked">
            <CDBSidebarMenuItem className="item-sidebar" icon="university"  style={{ color: '#34495e' }}> Visite virtuelle </CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/club" ClassName="activeClicked">
            <CDBSidebarMenuItem className="item-sidebar" icon="grip-horizontal" style={{ color: '#34495e' }}> Environnement </CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/formation" ClassName="activeClicked">
            <CDBSidebarMenuItem className="item-sidebar" icon="graduation-cap" style={{ color: '#34495e' }}> Formation </CDBSidebarMenuItem>
          </NavLink>
        </CDBSidebarMenu>
      </CDBSidebarContent>
      <CDBSidebarFooter className="sidebar-footer">
        <Footer />
      </CDBSidebarFooter>
    </CDBSidebar>
  );
};

export default Sidebar;

