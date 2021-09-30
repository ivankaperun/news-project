import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  articles = [];
  loading: boolean = true;

  constructor(private newsService: NewsService) {}
  loadNews(): void {
    this.loading = true;

    this.newsService.getNews().subscribe((res) => {
      this.loading = false;
      this.articles = res;
    });
  }

  ngOnInit(): void {
    this.newsService.getNews().subscribe((res) => {
      this.articles = res;
    });
    this.loadNews();
  }
}
