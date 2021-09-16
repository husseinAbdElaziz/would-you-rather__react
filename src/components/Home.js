import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { handleGetQuestions } from '../actions';
import QuestionCard from './QuestionCard';

const Home = (props) => {
  // get questions
  const { questions, users } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetQuestions());
  }, [dispatch]);

  console.log('questions', questions);
  return (
    <Container className='d-flex flex-column align-items-center'>
      {questions &&
        Object?.keys(questions)?.map((question) => (
          <QuestionCard
            key={question}
            author={users[questions[question]?.author]}
            question={questions[question]}
          />
        ))}
    </Container>
  );
};

export default Home;
