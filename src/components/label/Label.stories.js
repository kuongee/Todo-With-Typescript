import { storiesOf } from '@storybook/html';
import { Label } from '.';

const stories = storiesOf('Label', module);
stories.add('Label', () => Label('Success'));