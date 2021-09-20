import React from 'react';
import { Card, Image } from 'react-bootstrap';

const UserCard = ({ user }) => {
  const getAnswerdCount = (answers) => Object.keys(answers)?.length;
  return (
    <Card text={'dark'} style={{ width: '22rem' }} className='my-3'>
      <Card.Header>
        <Image
          roundedCircle
          className='avatar'
          src={user?.avatarURL}
          alt={`avatar: ${user?.name}`}
        />
        <span className='d-inline-block mx-2'>{user?.name}:</span>
      </Card.Header>
      <Card.Body>
        <h5>added questions: {user?.questions?.length}</h5>
        <h5>answered questions: {getAnswerdCount(user.answers)}</h5>
        <h3>
          score: {user?.questions?.length + getAnswerdCount(user.answers)}
        </h3>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
