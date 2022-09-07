import FormHelper from './submit-form';

export default class {
    constructor(formId) {
        this.formId = formId;
    }

    initBindings(formId) {
        console.log(formId);
        const form = document.getElementById(this.formId);
        if (form === null || form === undefined) {
            return;
        }

        console.log('this.formId', this.formId);
        document.getElementById(this.formId)
            .addEventListener('submit', function(e) {
                e.preventDefault();
                FormHelper.submitForm(e);
            }, false);
    }
}
