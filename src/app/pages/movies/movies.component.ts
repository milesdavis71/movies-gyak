import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  constructor(private http: HttpClient) {}
  getMovies() {
    this.http.get('https://api.themoviedb.org/3/movie/550?api_key=bd3760ab8ae6f4eaa1b79063222a3ec1')
  }

  ngOnInit(): void {}
}
