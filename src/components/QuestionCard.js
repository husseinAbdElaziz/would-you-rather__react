import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { calcPercentage, isPollVoted } from '../utils/helpers';

const QuestionCard = (props) => {
  const { question, author, loggedInUser } = props;

  const isVoted = isPollVoted(
    question?.optionOne,
    question?.optionTwo,
    loggedInUser
  );

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
        <div
          className={`mb-2 ${
            question?.optionOne?.votes?.includes(loggedInUser) && 'user__vote'
          }`}
        >
          {question?.optionOne?.text}
          {isVoted && (
            <h5>{calcPercentage(question?.optionOne, question?.optionTwo)}</h5>
          )}
        </div>
        <h6 className='font-weight-bold'>Or</h6>
        <div
          className={
            question?.optionTwo?.votes?.includes(loggedInUser)
              ? 'user__vote'
              : ''
          }
        >
          {question?.optionTwo?.text}
          {isVoted && (
            <h5>
              {calcPercentage(question?.optionOne, question?.optionTwo, false)}
            </h5>
          )}
        </div>
        <Link to={`/question/${question?.id}`}>
          <Button variant='dark'>
            {isVoted ? 'view details' : 'Answer Question'}
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default QuestionCard;
