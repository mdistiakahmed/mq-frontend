import { Component } from '@angular/core';
import { QuoteService } from '../../services/quote.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-quote-details-page',
  templateUrl: './quote-details-page.component.html',
  styleUrl: './quote-details-page.component.css',
})
export class QuoteDetailsPageComponent {
  quoteId: any;
  quoteDetails: any;
  loading: boolean = false;
  dummyArray = new Array(3);

  constructor(
    private quoteService: QuoteService,
    private route: ActivatedRoute,
    private metaService: Meta,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(async (params) => {
      this.quoteId = params.get('id');
      await this.loadQuote();
      this.metaService.addTag({ name: 'og:title', content: 'Test Title' });
      this.metaService.addTag({
        name: 'og:description',
        content: 'Test Description',
      });
      this.metaService.addTag({
        name: 'og:image',
        content: this.quoteDetails.image_url,
      });
    });
  }

  async loadQuote() {
    try {
      this.loading = true;
      //this.quoteDetails = await this.quoteService.getQuoteById(this.quoteId);
      this.quoteDetails = {
        quote_id: 'a1c7b309-fa10-456d-8875-f9538f1928a1',
        author: 'istiak',
        category: 'love',
        image_url:
          'https://first-test-istiak.s3.amazonaws.com/b3a33899-0d6b-42d7-bbe1-173174f52ce9.jpg',
        like_count: 0,
        share_count: 0,
      };

      console.log(this.quoteDetails);
    } catch (error: any) {
    } finally {
      this.loading = false;
    }
  }
}
