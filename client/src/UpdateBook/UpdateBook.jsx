import { useParams, useNavigate } from 'react-router-dom';
import { getBook, updateBook } from '../api';
import { useQuery, useMutation } from 'react-query';
import { BookForm, Container } from '../shared';
import { Box, Heading, Flex } from 'rebass/styled-components';
import { BallTriangle } from 'react-loader-spinner';

export const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading, isError } = useQuery(
    ['book', { id }],
    getBook
  );

  const { mutateAsync, isLoading: isMutating } = useMutation(updateBook);

  const onFormSubmit = async formData => {
    await mutateAsync({ ...formData, id });
    navigate('/');
  };

  if (isLoading) {
    return (
      <Container>
        <Flex py={5} justifyContent='center'>
          <BallTriangle color='black' height={70} width={70} />
        </Flex>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Flex py={5} justifyContent='center'>
          Error: {error.message}
        </Flex>
      </Container>
    );
  }

  return (
    <Container>
      <Box sx={{ py: 3 }}>
        <Heading sx={{ marginBottom: 3 }}>Update Book</Heading>
        <BookForm
          defaultValues={data}
          onFormSubmit={onFormSubmit}
          isLoading={isMutating}
        />
      </Box>
    </Container>
  );
};
