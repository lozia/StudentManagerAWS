import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  buttonText ='';
  @Input()
	set text(name: string) {
		this.buttonText = name;
	}
  get name(): string {
		return this.buttonText;
	}

	@Input() 
  type: string = 'button';

  @Input()
  buttonActive: boolean = false;

  @Input() @Output()
  click: EventEmitter<any> = new EventEmitter();

  onClick() {
		this.click.emit();
	}

}

