import HideHelper from './hide-element';

export default class {
  constructor(elementId) {
    this.elementId = elementId;
    console.log(elementId);
  }
  initBindings() {
    const button = document.getElementById('hide-button');
    button.addEventListener('click', function(e) {
      e.preventDefault();
      HideHelper.hideElement(e);
    }, false);
  }
}
