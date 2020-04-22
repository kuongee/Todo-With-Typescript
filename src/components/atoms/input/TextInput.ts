interface props {
  placeholder: string;
}

const TextInput = (props) =>
  `<input class="input" type="text" placeholder="${props.placeholder}">`;

export default TextInput;
