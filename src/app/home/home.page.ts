import { Platform } from '@ionic/angular';
import { Component } from '@angular/core';

import { Plugins } from "@capacitor/core"
const { CameraPreview } = Plugins;
import { CameraPreviewOptions, CameraPreviewPictureOptions } from '@capacitor-community/camera-preview';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  private cameraPreviewOptions: CameraPreviewOptions = {
    position: 'rear',
    height: 1920,
    width: 1080,
    parent: "parent"
  };
  private cameraPreviewPictureOptions: CameraPreviewPictureOptions = {
    quality: 50
  };
  public base64PictureData: string = ""
  
  constructor(private platform: Platform) {
    platform.ready().then(() => {
      CameraPreview.start(this.cameraPreviewOptions);
    })
  }

  public async take(){
    const result = await CameraPreview.capture(this.cameraPreviewPictureOptions);
    console.log(result)
    this.base64PictureData = "data:image/jpeg;base64," + result.value;
  }

}
