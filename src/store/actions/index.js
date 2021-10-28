export const setInfosForms = (infosForms) => {
  return {
    type: 'SETINFOSFORMS',
    infosForms: infosForms,
  };
};

export const reset = () => {
  return {
    type: 'RESET',
    infosForms: '',
  };
};
