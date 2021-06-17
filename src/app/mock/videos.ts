import { Injectable } from "@angular/core";
import { VideoOne } from "../models/video-one";

@Injectable({providedIn:'root'})
export class VideosMock {
  
  videosMock:VideoOne[] = [
    {
      ID:"sdadad213dss",
      Title:"This is Title",
      Thumbnail:"https://cdn0-production-images-kly.akamaized.net/lX3bXgLzPQ_hSqisMK2Kg_40nf8=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2754932/original/005940800_1552970791-fotoHL_kucing.jpg",
      User:{
        ID:"1",
        Name:"Agus",
        AvatarURL:"https://pbs.twimg.com/profile_images/1363210545118150659/Uo-XiGtv_400x400.jpg",
      }
    },
    {
      ID:"sdadad213dss",
      Title:"This is Title",
      Thumbnail:"https://cdn0-production-images-kly.akamaized.net/lX3bXgLzPQ_hSqisMK2Kg_40nf8=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2754932/original/005940800_1552970791-fotoHL_kucing.jpg",
      User:{
        ID:"1",
        Name:"Agus",
        AvatarURL:"https://pbs.twimg.com/profile_images/1363210545118150659/Uo-XiGtv_400x400.jpg",
      }
    },
    {
      ID:"sdadad213dss",
      Title:"This is Title",
      Thumbnail:"https://cdn0-production-images-kly.akamaized.net/lX3bXgLzPQ_hSqisMK2Kg_40nf8=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2754932/original/005940800_1552970791-fotoHL_kucing.jpg",
      User:{
        ID:"1",
        Name:"Agus",
        AvatarURL:"https://pbs.twimg.com/profile_images/1363210545118150659/Uo-XiGtv_400x400.jpg",
      }
    },
    {
      ID:"sdadad213dss",
      Title:"This is Title",
      Thumbnail:"https://cdn0-production-images-kly.akamaized.net/lX3bXgLzPQ_hSqisMK2Kg_40nf8=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2754932/original/005940800_1552970791-fotoHL_kucing.jpg",
      User:{
        ID:"1",
        Name:"Agus",
        AvatarURL:"https://pbs.twimg.com/profile_images/1363210545118150659/Uo-XiGtv_400x400.jpg",
      }
    },
  ]
}
