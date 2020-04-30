import { Label, LabelStrike } from '../atoms/label/index.js';

interface Item {
  index: number;
  content: string;
  isStrike: boolean;
}

const ItemLabel = (item: Item) => {
  const labelElement = document.createElement('div');
  labelElement.setAttribute('id', `${item.index}`);
  labelElement.classList.add('label-item');
  labelElement.innerHTML = `${item.isStrike ? LabelStrike(item.content) : Label(item.content)}`;

  return labelElement;
};
export default ItemLabel;
