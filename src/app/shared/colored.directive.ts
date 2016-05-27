import {OnInit, Directive, ElementRef, Renderer, Input} from '@angular/core';

@Directive({
    selector: '[colored]',
    host: {
        '(mouseenter)': 'updateColor()',
        '(mouseleave)': 'setColor("white")'
    }
})
export class ColoredDirective implements OnInit {
    defaultColor: string = 'white';
    @Input() wha: string;
    
    constructor(private elRef: ElementRef, private renderer: Renderer) {}
    
    ngOnInit():any {
        this.setColor(this.defaultColor);
    }
    
    setColor(cc: string) {
        this.renderer.setElementStyle(this.elRef.nativeElement, 'color', cc);
    }
    
    updateColor() {
        this.setColor(this.wha);
    }
}