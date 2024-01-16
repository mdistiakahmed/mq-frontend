import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  quotes = [
    {
      author: 'Winston Churchill',
      text: 'If you are going through hell, keep going.',
    },
    {
      author: 'Joe Jackson',
      text: 'If you build it, they will come.',
    },
    {
      author: 'Charles-Guillaume Étienne',
      text: 'If you want something done right, do it yourself.',
    },
    {
      author: 'Margaret Thatcher',
      text: 'If you want something said, ask a man; if you want something done, ask a woman.',
    },
    {
      author: 'William Shakespeare',
      text: 'A rose by any other name would smell as sweet.',
    },
    {
      author: 'Thomas Edison',
      text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
    },
    {
      author: 'Thomas Edison',
      text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
    },
    {
      author: 'Thomas Edison',
      text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
    },
    {
      author: 'Thomas Edison',
      text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
    },
    {
      author: 'Thomas Edison',
      text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
    },
    {
      author: 'Thomas Edison',
      text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
    },
    {
      author: 'Thomas Edison',
      text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
    },
    {
      author: 'Thomas Edison',
      text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
    },
    {
      author: 'Thomas Edison',
      text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
    },
    {
      author: 'Thomas Edison',
      text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
    },
    {
      author: 'Thomas Edison',
      text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
    },
    {
      author: 'Thomas Edison',
      text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
    },
  ];

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomBackgroundImage(): string {
    const randomNumber = this.getRandomNumber(1, 5);
    return `url(assets/background_${randomNumber}.jpg)`;
  }

  originalDate: string = '2023-11-26T00:00:00.000Z';
  formattedDate!: string;

  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    this.formattedDate = this.formatDate(this.originalDate);
  }

  formatDate(date: string): any {
    const parsedDate = new Date(date);
    return this.datePipe.transform(parsedDate, 'medium');
  }
}
