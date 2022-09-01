import FormHelper from './submit-form';

export default class
{
    constructor(formId) {
        console.log('() -> this.formId', this.formId);
        this.formId = formId;
    }

    initBindings() {
        const form = document.getElementById(this.formId);
        if (form === null || form === undefined) {
            return;
        }

        console.log('this.formId', this.formId);

        document.getElementById(this.formId).addEventListener('submit', function (e) {
            e.preventDefault();
            FormHelper.submitForm(e);
        }, false);
    
        console.log(`Listening ... to ${this.formId}`);
    }

}
