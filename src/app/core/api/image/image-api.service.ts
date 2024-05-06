import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { NzUploadFile } from 'ng-zorro-antd/upload'

import { TImage } from 'src/app/core/api/image/image-api.interface'
import { TImageDto } from 'src/app/core/api/image/image-api.dto'
import { API_IMAGE } from 'src/app/core/api/api-urls'

import { map, Observable } from 'rxjs'

@Injectable()
export class ImageApiService {
  constructor(private httpClient: HttpClient) {}

  saveImage(image: NzUploadFile): Observable<TImage> {
    const formData = new FormData()
    formData.set('files', image as any)

    return this.httpClient
      .post<TImageDto>(API_IMAGE, formData)
      .pipe(map((dto) => this.deserialize(dto)))
  }

  deserialize(dto: TImageDto): TImage {
    return dto
  }
}
