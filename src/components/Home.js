import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import QuestionCard from './QuestionCard';

class Home extends Component {
  // types
  ANSWERED_QUESTION = 'answered';
  UNANSWERED_QUESTION = 'unAnswered';

  state = {
    filterdQuestions: '',
    activeList: 'answered',
  };

  componentDidMount() {
    const { questions } = this.props;
    this.setState({ filterdQuestions: questions?.answered });
  }

  setActiveList = (activeList) => {
    if (activeList === this.ANSWERED_QUESTION) {
      this.setState({
        activeList,
        filterdQuestions: this.props?.questions?.answered,
      });
    } else {
      this.setState({
        activeList,
        filterdQuestions: this.props?.questions?.unAnswered,
      });
    }
  };

  render() {
    const { users } = this.props;

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
          {this.state?.filterdQuestions &&
            this?.state?.filterdQuestions?.map((question) => (
              <QuestionCard
                key={question.id}
                author={users[question?.author]}
                loggedInUser={this.props.loggedInUser}
                question={question}
              />
            ))}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = ({ questions: allQuestions, users, loggedInUser }) => {
  const loggedInUserAnswers = Object.keys(users[loggedInUser]?.answers || {});

  const unAnswered = Object.values(allQuestions)
    .filter((question) => !loggedInUserAnswers.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const answered = Object.values(allQuestions)
    .filter((question) => loggedInUserAnswers.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    questions: { answered, unAnswered },
    users,
    loggedInUser,
  };
};
export default connect(mapStateToProps)(Home);
