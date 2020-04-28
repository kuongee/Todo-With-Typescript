import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import TextInput from './TextInput';

const stories = storiesOf('Input', module);
stories.add('Text Input', () =>
  TextInput({
    placeholder: 'Text input',
    value: '',
    onKeyPress: action('key press')
  })
);
