import { Component } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  
  public photos:any = [];

  constructor(private _photosService:PhotoService){
    _photosService.getPhotos().subscribe(
      (data:any)=>{
        this.photos = data.data.memes;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }
}
