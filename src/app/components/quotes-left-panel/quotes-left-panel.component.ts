import { Component, Input, SimpleChanges } from '@angular/core';
import { QuoteService } from '../../services/quote.service';

@Component({
  selector: 'app-quotes-left-panel',
  templateUrl: './quotes-left-panel.component.html',
  styleUrl: './quotes-left-panel.component.css',
})
export class QuotesLeftPanelComponent {
  @Input() category: any;
  skip: number = 0;
  limit: number = 10;
  totalItems: number = 10;
  quotes: any = [];
  loading: boolean = false;

  onPageChange(event: any) {
    this.skip = event.first;
    this.limit = event.rows;

    this.loadQuotes();
  }

  constructor(private quoteService: QuoteService) {}

  async ngOnInit() {
    await this.loadQuotes();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['category'] && !changes['category'].firstChange) {
      this.category = changes['category'].currentValue;
      this.loadQuotes();
    }
  }

  async loadQuotes() {
    try {
      this.loading = true;
      const result = await this.quoteService.getQuotes(
        this.skip,
        this.limit,
        this.category
      );
      this.quotes = result.quotes;
      this.totalItems = result.total_items;
      console.log(result);
    } catch (error: any) {
    } finally {
      this.loading = false;
    }
  }
}
