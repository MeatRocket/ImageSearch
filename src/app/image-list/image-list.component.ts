import { Component, OnInit,Input } from '@angular/core';
import { ImageService } from '../shared/images.service';


@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: any[] = [];
  imagesFound : boolean = false;
  searching : boolean = false;
  @Input() searchQuery : string ="";

  constructor(private _imageService : ImageService) { }

  searchImages(query: string){
    this.searching = true;
    return this._imageService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error =>  this.handleError(error),
      () => this.searching = false
    )
  }
  handleSuccess(data: any){
    console.log(data.hits);
    this.images = data.hits;
    this.imagesFound = true;
  }

  handleError(data : any){
    console.log(data);
  }
  ngOnInit(): void {
  }

}
