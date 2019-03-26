import { Files } from './../../model/files.model';
import { NotifierService } from 'angular-notifier';
import { NotifyComponent } from './../common/notify/notify.component';
import { VisitService } from './../../services/visit.service';
import { Visit } from './../../model/visit.model';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-visit-new',
  templateUrl: './visit-new.component.html',
  styleUrls: ['./visit-new.component.css']
})
export class VisitNewComponent extends NotifyComponent implements OnInit {
  @ViewChild(NgForm) form: NgForm;
  @ViewChild('myForm') myForm: NgForm;
  myForm2: FormGroup;

  visit: Visit;
  viewMessage: boolean;

  constructor(
    private notifierService: NotifierService,
    private visitService: VisitService,
    private route: ActivatedRoute
  ) {
    super(notifierService);
  }

  ngOnInit() {
    this.visit = new Visit(null, null, null);
    this.initForm();
  }

  process() {
    let success = true;
    if (this.validForm()) {
      this.visitService.process(this.visit).subscribe(
        (response: Files) => {
          this.visit = new Visit(null, null, null);
          this.form.reset();
          this.form.resetForm();
          this.showNotification('success', 'Files Processed sucess');
          success = true;
        },
        err => {
          const httpError: HttpErrorResponse = err;
          this.showNotification('error', httpError.error['error']);
          success = false;
        }
      );
    }
    if (success) {
      this.myForm.reset();
      this.myForm.resetForm();
    }
  }

  validForm(): boolean {
    let valid = true;
    if (this.visit.fileEmployees === null) {
      valid = false;
      this.showNotification('error', 'File with employees is required!');
    }
    if (this.visit.fileStores === null) {
      valid = false;
      this.showNotification('error', 'File with stores is required!');
    }
    return valid;
  }

  onFileEmployeesChange(event: any): void {
    const files: FileList = event.target.files;
    const file: File = files[0];
    this.visit.fileEmployees = file;
  }

  onFileStoresChange(event: any): void {
    const files: FileList = event.target.files;
    const file: File = files[0];
    this.visit.fileStores = file;
  }

  initForm(): void {
    this.myForm2 = new FormGroup({
      fileEmployees: new FormControl(),
      fileStores: new FormControl()
    });
  }

  process2() {
    if (this.validForm()) {
      this.visitService.process2(this.visit).subscribe(
        (response: Files) => {
          this.visit = new Visit(null, null, null);
          this.showNotification('success', 'Files Processed sucess');
          this.myForm2.reset();
        },
        err => {
          const httpError: HttpErrorResponse = err;
          this.showNotification('error', httpError.error['error']);
        }
      );
    }
  }

  resetForm(): void {
    alert('ENTROU NO RESET FORM');
    this.myForm2.patchValue({
      fileEmployees: null,
      fileStores: null
    })
  }
}
