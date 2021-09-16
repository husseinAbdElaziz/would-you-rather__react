import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleGetQuestions } from '../actions';
import QuestionCard from './QuestionCard';

class Home extends Component {
  // types
  ANSWERED_QUESTION = 'answered';
  UNANSWERED_QUESTION = 'unAnswered';

  state = {
    filterdQuestions: '',
    answeredQuestions: '',
    unAnsweredQuestions: '',
    activeList: 'answered',
  };

  componentDidMount() {
    const { questions, users, loggedInUser } = this.props;
    this.props.dispatch(handleGetQuestions());

    // current logged in user answered questions
    const loggedInUserAnswers = Object.keys(users[loggedInUser]?.answers || {});

    const answeredQuestions = Object.keys(questions)
      ?.filter((question) => loggedInUserAnswers.includes(question))
      .sort((a, b) => b.timestamp - a.timestamp);

    const unAnsweredQuestions = Object.keys(questions)
      ?.filter((question) => !loggedInUserAnswers.includes(question))
      .sort((a, b) => b.timestamp - a.timestamp);

    this.setState({
      answeredQuestions,
      unAnsweredQuestions,
      filterdQuestions: answeredQuestions,
    });
  }

  setActiveList = (activeList) => {
    if (activeList === this.ANSWERED_QUESTION) {
      this.setState({
        activeList,
        filterdQuestions: this.state.answeredQuestions,
      });
    } else {
      this.setState({
        activeList,
        filterdQuestions: this.state.unAnsweredQuestions,
      });
    }
  };

  render() {
    const { questions, users } = this.props;

    return (
      <Container className='d-flex flex-column align-items-center'>
        <div className='navs'>
          <Button
            variant='light'
            className={`mx-2 ${
              this.state.activeList === this.ANSWERED_QUESTION && 'shadow'
            }`}
            onClick={() => this.setActiveList(this.ANSWERED_QUESTION)}
          >
            Answered Question
          </Button>
          <Button
            variant='light'
            className={`mx-2 ${
              this.state.activeList === this.UNANSWERED_QUESTION && 'shadow'
            }`}
            onClick={() => this.setActiveList(this.UNANSWERED_QUESTION)}
          >
            unanswered Question
          </Button>
        </div>
        <div>
          {this.state.filterdQuestions &&
            this.state.filterdQuestions?.map((question) => (
              <QuestionCard
                key={question}
                author={users[questions[question]?.author]}
                question={questions[question]}
              />
            ))}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = ({ questions, users, loggedInUser }) => ({
  questions,
  users,
  loggedInUser,
});
export default connect(mapStateToProps)(Home);
