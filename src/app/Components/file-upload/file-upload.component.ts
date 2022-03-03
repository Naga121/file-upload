import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/Service/file.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  shortLink:string='';
  loading:boolean=false;
  file!:File;
  constructor(private fileService:FileService) { }

  ngOnInit(): void {
  }

  onChange(event:any){
    console.log(event);

    this.file=event.target.files[0];
  }
  upload(){
    this.loading=true;
    this.fileService.upload(this.file).subscribe((res)=>{
      if(typeof (res)==='object'){
        this.shortLink=res.link;
        this.loading=false;
      }
    });
  }

}
