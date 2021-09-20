import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import UserCard from './UserCard';

const LeaderBoard = () => {
  const { users } = useSelector((state) => state);

  return (
    <Container className='mt-5'>
      {users &&
        Object.keys(users)?.map((user) => (
          <UserCard key={user} user={users[user]} />
        ))}
    </Container>
  );
};

export default LeaderBoard;
