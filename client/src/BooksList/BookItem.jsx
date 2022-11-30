import {
  Flex,
  Text,
  Button,
  Link as StyledLink,
} from 'rebass/styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { removeBook } from '../api';
import { ThreeDots } from 'react-loader-spinner';

export const BookItem = ({ id, title, author }) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(removeBook);

  const remove = async () => {
    await mutateAsync(id);
    queryClient.invalidateQueries('books');
  };

  return (
    <Flex key={id} p={3} width='100%' alignItems='center'>
      <StyledLink as={RouterLink} to={`/update-book/${id}`} mr='auto'>
        {title}
      </StyledLink>
      <Text>{author}</Text>
      <Button onClick={remove} ml='5'>
        {isLoading ? (
          <ThreeDots color='#fff311' height={20} width={50} />
        ) : (
          'Remove'
        )}
      </Button>
    </Flex>
  );
};
