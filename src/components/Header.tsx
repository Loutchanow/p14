import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { LinkProps } from 'react-router-dom';

interface StyledLinkProps extends LinkProps {
  $isActive?: boolean;
}

const Nav = styled.nav`
  display: flex;
  padding: 1rem;
`;

export const StyledLink = styled(Link)<StyledLinkProps>`
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  margin-left: 2rem;
  text-decoration: ${(props) => (props.$isActive ? 'underline' : '')};
`;

function Header() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('');

  React.useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <Nav>
      <StyledLink
        to="/"
        $isActive={activeTab === '/' }
        onClick={() => setActiveTab('/')}
      >
        Home
      </StyledLink>
      <StyledLink
        to="/current"
        $isActive={activeTab === '/current'}
        onClick={() => setActiveTab('/current')}
      >
        Current Employees
      </StyledLink>
    </Nav>
  );
}

export default Header;
