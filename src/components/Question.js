import React from 'react';
import { Container, Form, Image, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { calcPercentage, isPollVoted } from '../utils/helpers';

import { handleAnswerQuestion } from '../actions';

const Question = (props) => {
  const { id } = props.match.params;

  const { questions, users, loggedInUser } = useSelector((store) => store);
  const dispatch = useDispatch();

  const { author, optionOne, optionTwo, id: qid } = questions[id] || {};

  const radioInputStyle = { fontWeight: 'bold', margin: '10px 0' };

  const isVoted = isPollVoted(optionOne, optionTwo, loggedInUser);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formVal = new FormData(event.currentTarget);

    const answer =
      formVal.get('answer') === optionOne.text ? 'optionOne' : 'optionTwo';

    dispatch(handleAnswerQuestion({ answer, loggedInUser, qid }));
  };

  return (
    <Container className='d-flex flex-column align-items-center mt-5'>
      <Image
        roundedCircle
        src={users[author]?.avatarURL}
        className='mb-4'
        alt={`avatar: ${author}`}
        style={{ width: '100px' }}
      />

      <h5>Would you rather</h5>

      {isVoted && (
        <div className='text-center'>
          <div
            className={`mb-2 ${
              optionOne?.votes?.includes(loggedInUser) ? 'user__vote px-3' : ''
            }`}
          >
            {optionOne?.text}
            <h5> votes: {optionOne?.votes?.length || 0}</h5>
            <h5>{calcPercentage(optionOne, optionTwo)}</h5>
          </div>
          <h6 className='font-weight-bold'>Or</h6>
          <div
            className={
              optionTwo?.votes?.includes(loggedInUser) ? 'user__vote px-3' : ''
            }
          >
            {optionTwo?.text}
            <h5> votes: {optionTwo?.votes?.length || 0}</h5>
            <h5> {calcPercentage(optionOne, optionTwo, false)}</h5>
          </div>
        </div>
      )}

      {!isVoted && (
        <Form onSubmit={(event) => handleSubmit(event)}>
          <Form.Check
            type='radio'
            label={optionOne?.text}
            name='answer'
            value={optionOne?.text}
            style={radioInputStyle}
            id='1'
          />
          <Form.Check
            type='radio'
            label={optionTwo?.text}
            name='answer'
            value={optionTwo?.text}
            style={radioInputStyle}
            id='2'
          />

          <Button variant='dark' type='submit' className='px-5 mt-3'>
            Vote
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default Question;
