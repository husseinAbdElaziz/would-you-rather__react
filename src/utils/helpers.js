export const isPollVoted = (optionOne, optionTwo, username) =>
  optionOne?.votes?.includes(username) || optionTwo?.votes?.includes(username);

export const calcPercentage = (optionOne, optionTwo, isOptionOne = true) => {
  const optionOneVotesCont = optionOne?.votes?.length || 0;
  const optionTwoVotesCont = optionTwo?.votes?.length || 0;
  const totalVotesCount = optionOneVotesCont + optionTwoVotesCont;

  const optionToCalc = isOptionOne ? optionOneVotesCont : optionTwoVotesCont;

  console.log('optionOneVotesCont', optionOneVotesCont);
  console.log('optionTwoVotesCont', optionTwoVotesCont);
  console.log('optionToCalc', optionToCalc);

  return `${(Math.ceil((optionToCalc / totalVotesCount) * 10000) / 100).toFixed(
    0
  )}%`;
};
