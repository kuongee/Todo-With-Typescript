interface props {
  value?: string;
  placeholder?: string;
  onKeyPress?(string): void;
}

const defaultProps: props = {
  placeholder: '',
  value: '',
  onKeyPress: () => {}
};

const TextInput = (props: props) => {
  const getProps = { ...defaultProps, ...props };
  const inputElement = document.createElement('INPUT');
  inputElement.classList.add('input');
  inputElement.setAttribute('type', 'text');
  inputElement.setAttribute('placeholder', getProps.placeholder);
  inputElement.setAttribute('value', getProps.value);
  inputElement.addEventListener('keypress', e => {
    getProps.onKeyPress(e);
  });
  return inputElement;
};

export default TextInput;
