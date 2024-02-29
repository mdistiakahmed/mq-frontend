import { Component, Input, SimpleChanges } from '@angular/core';
import { QuoteService } from '../../services/quote.service';
import { Router } from '@angular/router';

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

  constructor(private quoteService: QuoteService, private router: Router) {}

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
      // const result = await this.quoteService.getQuotes(
      //   this.skip,
      //   this.limit,
      //   this.category
      // );

      const result = {
        quotes: [
          {
            quote_id: 'a1c7b309-fa10-456d-8875-f9538f1928a1',
            author: 'istiak',
            category: 'love',
            image_url:
              'https://first-test-istiak.s3.amazonaws.com/b3a33899-0d6b-42d7-bbe1-173174f52ce9.jpg',
            like_count: 0,
            share_count: 0,
          },
        ],
        total_items: 1,
      };
      this.quotes = result.quotes;
      this.totalItems = result.total_items;
    } catch (error: any) {
    } finally {
      this.loading = false;
    }
  }

  onShareClick(quoteId: string) {
    this.router.navigate([`/quote-details/${quoteId}`]);
  }
}
