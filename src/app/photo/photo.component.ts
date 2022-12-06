import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor(){}
  public video = [
    {vName:'Pizza',Photo:'/assets/Photo1.jpg',Like:0,Dislike:0},
    {vName:'Cereals',Photo:'/assets/photo2.jpg',Like:0,Dislike:0},
    {vName:'Nachos',Photo:'/assets/photo3.jpg',Like:0,Dislike:0},
    {vName:'Pasta',Photo:'/assets/photo4.jpg',Like:0,Dislike:0}
  ]
  ngOnInit(): void {
    
  }
  public LikeCounter(video:any){
    video.Like++;
  }
  public DislikeCounter(video:any){
    video.Dislike++;
  }
}
