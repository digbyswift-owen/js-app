import FieldListener from './disable-button-listener';
import FormListener from './form-listener';
import ButtonListener from './hide-button-listener';

const nameListener = new FormListener('name-form');
nameListener.initBindings('name-form');

const hideListener = new ButtonListener('hide-button');
hideListener.initBindings();

const buttonListener = new FieldListener('name-field');
buttonListener.initBindings('submit-button');
