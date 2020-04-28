import TextInput from '../atoms/input/TextInput';

export default class TodoInput {
  appInputHtmlElement: HTMLElement;
  value: string;
  handleEnterKey: (x: any) => void;
  textInput: any;

  constructor(handleEnterKey) {
    this.appInputHtmlElement = document.querySelector('#app-input');
    this.value = '';
    this.handleEnterKey = handleEnterKey;

    this.render();
  }

  onEnterKey(e) {
    const value = (e.target as HTMLInputElement).value;
    if (e.key === 'Enter' && value) {
      this.handleEnterKey(value);
    }
  }

  render() {
    this.appInputHtmlElement.append(
      TextInput({
        placeholder: '할 일을 입력해주세요.',
        value: this.value,
        onKeyPress: this.onEnterKey.bind(this)
      })
    );
  }
}
