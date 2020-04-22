import { Label, LabelStrike } from '../atoms/label/index.js';

interface Item {
  index: number;
  content: string;
  isStrike: boolean;
}

const ItemLabel = (item: Item) =>
  `<div id=${item.index} class="label-item"> ${
    item.isStrike ? LabelStrike(item.content) : Label(item.content)
  } </div>`;
export default ItemLabel;
