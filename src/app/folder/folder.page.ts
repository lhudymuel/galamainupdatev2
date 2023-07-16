import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit { imageSource: any;

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit() {}

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,
      saveToGallery: true,
    });
    this.imageSource = this.domSanitizer.bypassSecurityTrustUrl(image.webPath ? image.webPath : '');
  };

  getPhoto() {
    return this.imageSource;
  }
}
