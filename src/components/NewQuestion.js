import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { handleAddQuestion } from '../actions';

const NewQuestion = (props) => {
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');
  const [fromErr, setFromErr] = useState('');

  const { loggedInUser } = useSelector((store) => store);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!optionOne || !optionTwo) return setFromErr('complete form');

    dispatch(
      handleAddQuestion({
        optionOneText: optionOne,
        optionTwoText: optionTwo,
        author: loggedInUser,
      })
    )
      .then((_) => props.history.push('/'))
      .catch((err) => console.log(err));
  };
  return (
    <Container className='vh-80  d-flex align-items-center justify-content-center'>
      <Form className=' add-new-question text-center w-75'>
        <h3 className='mb-4'>Would you rather ?</h3>
        <div>
          <Form.Control
            size='lg'
            type='text'
            placeholder='First Option'
            onChange={(event) => {
              setFromErr('');
              setOptionOne(event.target.value);
            }}
          />
        </div>
        <p className='my-2'>Or</p>

        <div>
          <Form.Control
            size='lg'
            type='text'
            placeholder='Second Option'
            onChange={(event) => {
              setFromErr('');
              setOptionTwo(event.target.value);
            }}
          />
        </div>

        <p className='text-danger my-3'>{fromErr}</p>

        <Button
          variant='dark'
          type='button'
          className='px-5 mt-3'
          onClick={handleSubmit}
        >
          Add Question
        </Button>
      </Form>
    </Container>
  );
};

export default NewQuestion;
