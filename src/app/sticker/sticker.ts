import { Component, input } from '@angular/core';
import { DonneeSticker } from '../donnee-sticker.type';

@Component({
  selector: 'app-sticker',
  imports: [],
  templateUrl: './sticker.html',
  styleUrl: './sticker.scss',
})
export class Sticker {

  donneesSticker = input.required<DonneeSticker>();
}
