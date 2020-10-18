import React from 'react';
import { Link } from 'react-router-dom'
import { Nav, Logo, Button, Text } from './HeaderStyle'

const Header = ({ theme, toggleTheme, history }) => {
    return (
      <Nav>
      <Link to="/">
        <Logo className='brand'>Where in te World?</Logo>
      </Link>
        <div className='dark-mode-btn'>
        <Button
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <i className="ri-moon-line"></i>
          ) : (
            <i className="ri-moon-fill"></i>
          )}
          <Text className='dark-mode-text'>Dark Mode</Text>
        </Button>
      </div>
      </Nav>
    )
}

export default Header;