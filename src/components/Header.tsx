
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
const Nav = styled.nav`
  display: flex;
  padding: 1rem;
`;

export const StyledLink = styled(Link)`
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  margin-left: 2rem;
  text-decoration: ${props => (props.isactive ? 'underline' : "")};
`;

  function Header() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('');
  
    React.useEffect(() => {
      setActiveTab(location.pathname);
    }, [location.pathname]);
    return (
      <Nav>
        <StyledLink to="/" isactive={activeTab === '/'} onClick={() => setActiveTab('/')}>
          Home
        </StyledLink>
        <StyledLink to="/current" isactive={activeTab === '/current'} onClick={() => setActiveTab('/')}>
          Current Employees
        </StyledLink>
          <StyledLink to="/current"/>
      </Nav>
    )
  }
  
  export default Header;
  