import { RESTART_GAME, MAKE_GUESS } from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.round(Math.random() * 100) + 1
};

export default (state = initialState, action) => {

  switch (action.type) {

    case RESTART_GAME:
      return {
        ...state,
        guesses: [],
        feedback: 'Make your guess!',
        auralStatus: '',
        correctAnswer: Math.round(Math.random() * 100) + 1
      };

    case MAKE_GUESS:
      let guess = parseInt(action.guess, 10);
      let feedback;

      if (isNaN(guess)) {
        return {
          ...state,
          feedback: 'Please enter a valid number'
        };
      }

      const difference = Math.abs(guess - this.state.correctAnswer);

      if (difference >= 50) {
        feedback = 'You\'re Ice Cold...';
      } else if (difference >= 30) {
        feedback = 'You\'re Cold...';
      } else if (difference >= 10) {
        feedback = 'You\'re Warm.';
      } else if (difference >= 1) {
        feedback = 'You\'re Hot!';
      } else {
        feedback = 'You got it!';
      }

      return {
        ...state,
        feedback,
        guesses: [...state.guesses, action.guess]
      };

    default:
      return state;
  }
}