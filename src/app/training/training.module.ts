import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperModule } from 'ngx-image-cropper';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import {ModalModule} from 'ngx-bootstrap/modal';
// import { TranningcategorymanagementComponent } from './tranningcategorymanagement/tranningcategorymanagement.component';
// import { ListingComponent } from './listing/listing.component';
// import { UsersearchPipe } from './search.pipe';
// import { AddEditComponent } from './tranningcategorymanagement/add-edit/add-edit.component';
import { NgxUploaderModule } from 'ngx-uploader';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CKEditorModule } from 'ngx-ckeditor';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    // TranningcategorymanagementComponent,
    // ListingComponent,
    // UsersearchPipe,
    // AddEditComponent,
  ],
  imports: [
    CommonModule,
    NgxUploaderModule,
    ImageCropperModule,
    CarouselModule.forRoot(),
    CKEditorModule,
    ClipboardModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    ModalModule.forRoot(),
  ]
})
export class TrainingModule {

 }
