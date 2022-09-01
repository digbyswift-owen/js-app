import HideHelper from './hide-element';

export default class {

    constructor(elementId) {
        this.elementId = elementId;
    }
    initBindings(){
        const element = document.getElementById(this.id);
        
        document.getElementById(this.elementId).addEventListener('click', function(e){
            e.preventDefault();
            HideHelper.hideElement(e);
        }, false);
    }
}