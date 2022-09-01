import DisableHelper from './submit-button-disable';

export default class {
    constructor(fieldId, buttonId){
        this.fieldId = fieldId;
    }

    initBindings(buttonId){
        document.getElementById(this.fieldId).addEventListener('keyup', function (e) {
            DisableHelper.disableFlip(e, buttonId);
        }, false);
    }
}