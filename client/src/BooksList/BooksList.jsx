import { useQuery } from 'react-query';
import { getAllBooks } from '../api';
import { Container } from '../shared/Container';
import { Flex } from 'rebass';
import { ThreeDots } from 'react-loader-spinner';
// import { BookItem } from './BookItem';

export const BooksList = () => {
  const { data, error, isLoading, isError } = useQuery('books', getAllBooks);
  console.log(data);

  if (isLoading) {
    return (
      <Container>
        <Flex py='5' justifyContent='center'>
          <ThreeDots color='#ccc' height={30} />
        </Flex>
      </Container>
    );
  }

  if (isError) {
    return <span> Ошибка - нет Ответа от сервера</span>;
  }

  return (
    <Container>
      <Flex flexDirection='column' alignitems='center'>
        {data.map(({ author, title, id }) => (
          <div author={author} title={title} key={id} id={id} />
        ))}
      </Flex>
    </Container>
  );
};
