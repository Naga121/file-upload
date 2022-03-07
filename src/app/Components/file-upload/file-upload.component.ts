import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  form:any;
  constructor(private fileService:FileService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      email:['',[Validators.required]]
    })
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
  addEmail(){
    console.log(this.form.value);

  }

}
