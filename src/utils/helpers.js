export const isPollVoted = (optionOne, optionTwo, username) =>
  optionOne?.votes?.includes(username) || optionTwo?.votes?.includes(username);
