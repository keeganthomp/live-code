export const SHOW_MESSAGE = 'SHOW_MESSAGE';


export const showMessage = data => {
  console.log('This is the SHOW_MESSAGE action')
  return {
    type: SHOW_MESSAGE,
    payload: data
  };
};