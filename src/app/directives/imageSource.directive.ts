import { Directive, ElementRef, Input , OnInit} from '@angular/core';

@Directive({ selector: '[imgSource]' })
export class ImgSourceDirective {

    @Input('imgSource') imageSourceUrl:String;
    private selectedElement:ElementRef;
    constructor(el: ElementRef) {
        this.selectedElement=el; 
    }

     ngOnInit() {
            let currentImageSrc : String  = this.imageSourceUrl;
            let currentElement : ElementRef = this.selectedElement;

            setTimeout(function () {    
                currentElement.nativeElement.src=currentImageSrc;
            }, 2000);
        }
}