import DisableHelper from './disable-button';

export default class {
  constructor(fieldId) {
    this.fieldId = fieldId;
  }

  initBindings(buttonId) {
    document.getElementById(this.fieldId)
        .addEventListener('keyup', function(e) {
          DisableHelper.disableFlip(e, buttonId);
        }, false);
  }
}
