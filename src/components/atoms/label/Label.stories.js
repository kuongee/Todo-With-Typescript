import { storiesOf } from '@storybook/html';
import { Label, LabelStrike } from '.';

const stories = storiesOf('Label', module);
stories.add('Label', () => Label('Label Item'));
stories.add('Label Strike', () => LabelStrike('Done'));
