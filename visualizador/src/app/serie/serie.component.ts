import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-course',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  
  courses: Array<Serie> = [];
  average: number = 0;
  constructor(private serieService: SerieService) { }

  

  getCourses() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.average = 0;

      series.forEach(serie => {
        this.average += serie.seasons;
      });
      this.average /= series.length
    });
  }

  ngOnInit() {
    this.getSeries();
  }

  

}
