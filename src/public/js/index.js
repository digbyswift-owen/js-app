import FieldListener from './disable-button-listener';
import ButtonListener from './hide-button-listener';

const hideListener = new ButtonListener('hide-button');
hideListener.initBindings();

const buttonListener = new FieldListener('name-field');
buttonListener.initBindings('submit-button');
