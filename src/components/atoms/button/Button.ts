interface props {
  content?: string;
  onClick?(string): void;
  size?: string;
}

const defaultProps: props = {
  content: '',
  onClick: () => {},
  size: ''
};

const Button = (props: props) => {
  const getProps = { ...defaultProps, ...props };
  const buttonElement = document.createElement('BUTTON');
  buttonElement.classList.add('button');
  buttonElement.classList.add(`is-${getProps.size}`);
  buttonElement.innerHTML = getProps.content;
  buttonElement.addEventListener('click', e => {
    getProps.onClick(e);
  });
  return buttonElement;
};

export default Button;
