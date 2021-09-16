import React from 'react';
import { Container, Form, Image, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Question = (props) => {
  const { id } = props.match.params;

  const { questions, users } = useSelector((store) => store);

  const { author, optionOne, optionTwo } = questions[id] || {};

  return (
    <Container className='d-flex flex-column align-items-center mt-5'>
      <Image
        roundedCircle
        src={users[author].avatarURL}
        className='mb-4'
        alt={`avatar: ${author}`}
        style={{ width: '100px' }}
      />

      <h5>Would you rather</h5>
      <Form>
        <Form.Check
          type='radio'
          label={optionOne?.text}
          name='answer'
          value={optionOne?.text}
          // id={`disabled-default-${type}`}
        />
        <Form.Check
          type='radio'
          label={optionTwo?.text}
          name='answer'
          value={optionTwo?.text}
        />
      </Form>

      <Button variant='dark' className='px-5 mt-3'>
        Answer Question
      </Button>
    </Container>
  );
};

export default Question;
