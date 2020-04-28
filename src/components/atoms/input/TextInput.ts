interface props {
  value: string;
  placeholder: string;
  onKeyPress(string): void;
}

const defaultProps: props = {
  placeholder: '',
  value: '',
  onKeyPress: () => {}
};

const TextInput = (props: props = { ...defaultProps }) => {
  const inputElement = document.createElement('INPUT');
  inputElement.classList.add('input');
  inputElement.setAttribute('type', 'text');
  inputElement.setAttribute('placeholder', props.placeholder);
  inputElement.setAttribute('value', props.value);
  inputElement.addEventListener('keypress', e => {
    props.onKeyPress(e);
  });
  return inputElement;
};

export default TextInput;
