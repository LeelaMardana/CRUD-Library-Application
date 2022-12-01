import { useQuery } from 'react-query';
import { getAllBooks } from '../api';
import { Container } from '../shared/Container';
import { Flex } from 'rebass';
import { BallTriangle } from 'react-loader-spinner';
import { BookItem } from './BookItem';

export const BooksList = () => {
  const { data, error, isLoading, isError } = useQuery('books', getAllBooks);
  if (isLoading) {
    return (
      <Container>
        <Flex py='5' justifyContent='center'>
          <BallTriangle radius={5} color='#0077CC' height={70} width={70} />
        </Flex>
      </Container>
    );
  }

  if (isError) {
    return <span>Ошибка: {error.message}</span>;
  }

  return (
    <Container>
      <Flex flexDirection='column' alignItems='center'>
        {data.map(({ author, title, id }) => (
          <BookItem author={author} title={title} key={id} id={id} />
        ))}
      </Flex>
    </Container>
  );
};
