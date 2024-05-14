import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';

import { ErrorService } from 'src/app/shared/services/error.service';
import { ImageApiService } from 'src/app/core/api/image/image-api.service';
import { TImage } from 'src/app/core/api/image/image-api.interface';
import { environment } from 'src/environments/environment.prod';
import { API_STATIC_IMAGES } from 'src/app/core/api/api-urls';

import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.scss'],
  providers: [ImageApiService],
})
export class ImageInputComponent {
  @Input({ required: true }) control!: FormControl<string>;
  @Input() label?: string;
  @Input() tooltip?: string;
  @Input() imageSize: number = 2048;

  loadedImage: NzUploadFile | null = null;

  get errorText(): string {
    return this.errorService.checkError(this.control);
  }

  get isRequired(): boolean {
    return this.control.hasValidator(Validators.required);
  }

  get imageSrc(): string {
    return (
      environment.baseUrl + API_STATIC_IMAGES + '/' + this.loadedImage?.uid
    );
  }

  constructor(
    private errorService: ErrorService,
    private ImageApiService: ImageApiService
  ) {}

  beforeImageUpload = (file: NzUploadFile): Observable<boolean> => {
    return this.ImageApiService.saveImage(file).pipe(
      tap((image: TImage) => {
        file.url = API_STATIC_IMAGES + image.id;
        file.uid = image.id;
        file.status = 'done';
        this.loadedImage = file;

        this.control.patchValue(image.id);
      }),
      map(() => false)
    );
  };

  removeImage(): void {
    this.loadedImage = null;
    this.control.patchValue('');
  }
}
