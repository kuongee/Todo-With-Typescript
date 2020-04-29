import TextInput from '../atoms/input/TextInput';

export default class TodoInput {
  appInputHtmlElement: HTMLElement;
  textInputHtmlElement: HTMLElement;
  value: string;
  handleEnterKey: (x: any) => void;
  textInput: any;

  props = {
    placeholder: '할 일을 입력해주세요.',
    value: '',
    onKeyPress: this.onEnterKey.bind(this)
  };

  constructor(handleEnterKey) {
    this.appInputHtmlElement = document.querySelector('#app-input');
    this.handleEnterKey = handleEnterKey;
    this.textInputHtmlElement = TextInput(this.props);
    this.render();
  }

  onEnterKey(e) {
    const value = (e.target as HTMLInputElement).value.trim();
    if (e.key === 'Enter' && value) {
      this.handleEnterKey(value);
      this.setState('');
    }
  }

  setState(value) {
    this.textInputHtmlElement.remove();
    this.props.value = value;
    this.textInputHtmlElement = TextInput(this.props);

    this.render();
  }

  render() {
    this.appInputHtmlElement.append(this.textInputHtmlElement);
    this.textInputHtmlElement.focus();
  }
}
