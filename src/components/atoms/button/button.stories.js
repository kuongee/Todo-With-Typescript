import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { withKnobs, radios } from '@storybook/addon-knobs';
import Button from './Button';
import constants from '../../../constants/index.js';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);
stories.add('Button', () => {
  const size = {
    SMALL: 'small',
    NORMAL: 'normal',
    MEDIUM: 'medium',
    LARGE: 'large'
  };

  const sizeOptions = radios('Size', size, constants.SIZE.SMALL);

  return Button({
    content: 'Click',
    onClick: action('click!!!'),
    size: sizeOptions
  })
});
