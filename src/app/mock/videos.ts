import { Injectable } from "@angular/core";
import { VideoOne } from "../models/video-one";

@Injectable({providedIn:'root'})
export class VideosMock {

  createVideomock(id:string,title:string,thumbnail:string,usrid:string,username:string,avatarurl:string):VideoOne{
    return {
      id:id,
      title:title,
      video:"videos",
      thumbnail:thumbnail,
      user:{
        id:usrid,
        username:usrid,
        avatarurl:avatarurl,
        email:"email",
      }
    }
  }

  createRandomVideo():VideoOne{
    let id = new Date().getUTCMilliseconds().toString()
    return this.createVideomock(id,"this is title","https://pbs.twimg.com/profile_images/1363210545118150659/Uo-XiGtv_400x400.jpg",id,"Agus","https://pbs.twimg.com/profile_images/1363210545118150659/Uo-XiGtv_400x400.jpg")
  }
  
  videosMock:VideoOne[] = [
    this.createRandomVideo(),
    this.createRandomVideo(),
    this.createRandomVideo(),
    this.createRandomVideo(),
    this.createRandomVideo(),
  ]
}
