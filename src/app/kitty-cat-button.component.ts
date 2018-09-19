import {
  Component,
  Input,
  ViewEncapsulation,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'kitty-cat-button',
  templateUrl: './kitty-cat-button.component.html',
  styleUrls: ['./kitty-cat-button.component.css'],
  encapsulation: ViewEncapsulation.Native,
})
export class KittyCatButtonComponent {
  @Input()
  name = 'Ginger';
  @Input()
  url = 'https://i.imgur.com/nfuMfTV.jpg';

  @Output()
  action = new EventEmitter();
}
