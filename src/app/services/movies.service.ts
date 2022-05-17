import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  getMovies() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=bd3760ab8ae6f4eaa1b79063222a3ec1'
    )
  }
}
