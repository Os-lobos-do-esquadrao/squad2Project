const setInfosForms = (state = {}, action) => {
  switch (action.type) {
    case 'SETINFOSFORMS':
      return action.infosForms;
    case 'RESET':
      return '';
    default:
      return state;
  }
};

export default setInfosForms;
