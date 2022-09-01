import FieldListener from './js/form-field-listener';
import FormListener from './js/form-listener';
import ButtonListener from './js/hide-button-listener';

document.getElementById('submit-button').disabled = true;

var listener = new FormListener('name-form');
listener.initBindings();

var listener = new FormListener('age-form');
listener.initBindings();

var listener = new ButtonListener('hide-button');
listener.initBindings();

var listener = new FieldListener('name');
listener.initBindings('submit-button');