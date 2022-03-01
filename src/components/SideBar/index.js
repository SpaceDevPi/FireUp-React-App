import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWarpper, SidebarLink, SideBtnWrap, SidebarRoute, SidebarMenu } from './SidebarElements';

const Sidebar = ({ isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWarpper>
            <SidebarMenu>
                <SidebarLink to="/" onClick={toggle}>Home</SidebarLink>
                <SidebarLink to="/blog" onClick={toggle}>Blog</SidebarLink>
                <SidebarLink to="/about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="/event" onClick={toggle}>Event</SidebarLink>
                <SidebarLink to="/explore" onClick={toggle}>Explore</SidebarLink>
                <SidebarLink to="/" onClick={toggle}>Sign Up</SidebarLink>
            </SidebarMenu>
        </SidebarWarpper>
        <SideBtnWrap>
            <SidebarRoute to="/signIn" onClick={toggle}>Sign In</SidebarRoute>
        </SideBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar