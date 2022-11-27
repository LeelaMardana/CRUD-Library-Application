import { Flex, Box, Link as StyledLink, Image } from 'rebass/styled-components';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import { Container } from './Container';

export const NavBar = () => {
  return (
    <Flex bg={'black'} color='white' justifyContent='center'>
      <Container>
        <Flex px={2} width='100%' alignItems='center'>
          <StyledLink
            as={Link}
            variant='nav'
            to='/'
            display='flex'
            alignItems='center'
          >
            <Image size={50} src={logo} mr={2} />
            React Query CRUD
          </StyledLink>

          <Box mx='auto' my={4} />

          <StyledLink as={Link} variant='nav' to='/create-book'>
            + Add new book
          </StyledLink>
        </Flex>
      </Container>
    </Flex>
  );
};
