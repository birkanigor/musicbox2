import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {

    constructor(el: ElementRef) {
        
        setTimeout(function () {
            el.nativeElement.style.backgroundColor = 'yellow';
            el.nativeElement.style.color = '#0e0660';
           // el.nativeElement.style.fontWeight = "bold";  
        }, 2000);
    }
}