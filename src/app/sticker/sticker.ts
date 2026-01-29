import { Component, computed, input } from '@angular/core';
import { DonneeSticker } from '../donnee-sticker.type';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sticker',
  imports: [
    NgClass
  ],
  templateUrl: './sticker.html',
  styleUrl: './sticker.scss',
})
export class Sticker {

  donneesSticker = input.required<DonneeSticker>();

  stickerPossede = computed<boolean>(() => this.donneesSticker().exemplaires > 0);
}
