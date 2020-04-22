import { storiesOf } from '@storybook/html';
import TextInput from './TextInput';

const stories = storiesOf('Input', module);
stories.add('Text Input', () => TextInput({ placeholder: 'Text input' }));
