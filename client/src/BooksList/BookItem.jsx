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
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const BookItem = ({ id, title, author }) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(removeBook);

  const remove = async () => {
    await mutateAsync(id);
    queryClient.invalidateQueries('books');
  };

  const BtnStyled = styled(Button)`
    width: 48px;
    height: 37px;
    margin-left: 30px;
    cursor: pointer;
  `;

  return (
    <Flex key={id} p={3} width='100%' alignItems='center'>
      <StyledLink as={RouterLink} to={`/update-book/${id}`} mr='auto'>
        <Text>{title}</Text>
        <Text>{author}</Text>
      </StyledLink>
      <Button type='link' as={RouterLink} to={`/update-book/${id}`}>
        <EditOutlined />
      </Button>
      <BtnStyled onClick={remove} ml='5'>
        {isLoading ? (
          <ThreeDots color='#fff' height={10} />
        ) : (
          <DeleteOutlined />
        )}
      </BtnStyled>
    </Flex>
  );
};
