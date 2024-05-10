import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';

import { ErrorService } from 'src/app/shared/services/error.service';
import { ImageApiService } from 'src/app/core/api/image/image-api.service';
import { TImage } from 'src/app/core/api/image/image-api.interface';

import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.scss'],
  providers: [ImageApiService],
})
export class ImageInputComponent {
  @Input({ required: true }) control!: FormControl<number | null>;
  @Input() label?: string;
  @Input() tooltip?: string;

  loadedImage: NzUploadFile | null = null;

  get errorText(): string {
    return this.errorService.checkError(this.control);
  }

  get isRequired(): boolean {
    return this.control.hasValidator(Validators.required);
  }

  constructor(
    private errorService: ErrorService,
    private ImageApiService: ImageApiService
  ) {}

  beforeImageUpload = (file: NzUploadFile): Observable<boolean> => {
    return this.ImageApiService.saveImage(file).pipe(
      tap((image: TImage) => {
        file.url = image.file;
        file.uid = image.id + '';
        file.status = 'done';
        this.loadedImage = file;

        this.control.patchValue(image.id);
      }),
      map(() => false)
    );
  };

  removeImage(): void {}
}
