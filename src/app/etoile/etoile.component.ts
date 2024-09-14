import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-etoile',
  templateUrl: './etoile.component.html',
  styleUrl: './etoile.component.css'
})
export class EtoileComponent {
  @Input() rate: number = 0; // le fils recoit les données venat du père
  @Output() notify: EventEmitter<number> = new EventEmitter();

  onChange(): void {
    this.notify.emit(this.rate);
  }
}
