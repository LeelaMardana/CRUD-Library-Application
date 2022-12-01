import { Flex, Box, Link as StyledLink, Image } from 'rebass/styled-components';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import logo from './logo.svg';
import { Container } from './Container';

export const NavBar = () => {
  const RouterLinkStyled = styled(RouterLink)`
    display: flex;
    align-items: center;
  `;

  return (
    <Flex bg={'#1b1d1e'} color='white' justifyContent='center'>
      <Container>
        <Flex px={2} width='100%' alignItems='center'>
          <StyledLink as={RouterLinkStyled} variant='nav' to='/'>
            <Image size={50} src={logo} mr={2} />
            CRUD-Library-Application
          </StyledLink>

          <Box mx='auto' my={4} />

          <StyledLink as={RouterLink} variant='nav' to='/create-book'>
            + Add new book
          </StyledLink>
        </Flex>
      </Container>
    </Flex>
  );
};
