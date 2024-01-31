import { Component } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service: MovieApiServiceService){

  }

  bannerResult:any=[];
  trendingMovieResult: any = [];
  comedyMovieResult: any = [];
  actionMovieResult: any = [];
  thrillerMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  adventureMovieResult: any = [];
  documentaryMovieResult: any = [];
  animationMovieResult: any = [];
 

  ngOnInit(): void{
    this.bannerData();
    this.trendingData();
    this.comedyMovie();
    this.actionMovie();
    this.thrillerMovie();
    this.sciencefictionMovie();
    this.adventureMovie();
    this.documentaryMovie();
    this.animationMovie();
  }

  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,'bannerresult#');
      this.bannerResult=result.results;
    });
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;
      // this.trendingMovieResult
    });
  }

  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    });
  }

  actionMovie(){
    this.service.fetchActionMovies().subscribe((result)=>{
      console.log(result,'actionmovies#');
      this.actionMovieResult=result.results;
    });
  }

  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    });
  }

  sciencefictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResult = result.results;
    });
  }

  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
    });
  }

  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
    });
  }

  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
    });
  }


}
