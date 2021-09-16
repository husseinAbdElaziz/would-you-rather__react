import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const QuestionCard = (props) => {
  const { question, author } = props;
  return (
    <Card text={'dark'} style={{ width: '22rem' }} className='my-3'>
      <Card.Header>
        <Image
          roundedCircle
          className='avatar'
          src={author?.avatarURL}
          alt={`avatar: ${question?.author}`}
        />
        <span className='d-inline-block mx-2'>{question?.author}:</span>
        <span className='d-inline-block mx-2'>
          {new Date(question?.timestamp).toLocaleDateString()}
        </span>
      </Card.Header>
      <Card.Body className='text-center'>
        <p className='mb-2'>{question?.optionOne?.text}</p>
        <h6 className='font-weight-bold'>Or</h6>
        <p>{question?.optionTwo?.text}</p>
        {!question?.isAnswered && (
          <Link to={`/question/${question?.id}`}>
            <Button variant='dark'>Answer Question</Button>
          </Link>
        )}
      </Card.Body>
    </Card>
  );
};

export default QuestionCard;