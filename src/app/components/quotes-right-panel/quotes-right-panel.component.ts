import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-quotes-right-panel',
  templateUrl: './quotes-right-panel.component.html',
  styleUrl: './quotes-right-panel.component.css',
})
export class QuotesRightPanelComponent {
  @Input() category: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['category'] && !changes['category'].firstChange) {
      this.category = changes['category'].currentValue;
    }
  }
}
