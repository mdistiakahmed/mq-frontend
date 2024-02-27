import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UploadService } from '../../services/upload.service';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css',
})
export class UploadComponent {
  uploadedFiles: any[] = [];
  loading = false;
  selectedFile: File | undefined;
  selectedFileDate: string | undefined;

  createNewCategoryModalOpen: boolean = false;
  createNewAuthorModalOpen: boolean = false;

  categoryList = [];
  authorList = [];
  selectedCategory: any;
  selectedAuthor: any;
  uploaderSecret: any;
  maxFileUploadSize = 1024 * 300; // 300KB
  @ViewChild('fileUpload') fileUploadComponent!: FileUpload;

  //modals
  newCategory: any;
  newAuthor: any;

  constructor(
    private messageService: MessageService,
    private uploadService: UploadService
  ) {}

  async ngOnInit() {
    await this.loadAllCategory();
    await this.loadAllAuthor();
  }

  onSelectFile(event: any) {
    this.selectedFile = event.files[0];
    if (this.selectedFile && this.selectedFile.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedFileDate = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      console.error('Selected file is not an image.');
    }
  }

  onClearFile() {
    this.selectedFile = undefined;
    this.selectedCategory = undefined;
    this.selectedAuthor = undefined;
    this.uploaderSecret = undefined;
  }

  async onUpload(event: any) {
    if (
      !this.selectedFile ||
      !this.selectedCategory ||
      !this.selectedAuthor ||
      !this.uploaderSecret
    ) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning',
        detail: 'Please fill the required fields',
      });
    } else {
      const formData: FormData = new FormData();
      formData.append('image_file', this.selectedFile);
      formData.append('category', this.selectedCategory.name);
      formData.append('author', this.selectedAuthor.name);
      formData.append('secret', this.uploaderSecret);
      try {
        this.loading = true;
        await this.uploadService.createNewQuote(formData);
        this.onClearFile();
        this.loading = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Upload successful',
        });
        this.fileUploadComponent.clear();
      } catch (error: any) {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Upload failed',
        });
      }
    }
  }

  async loadAllCategory() {
    this.loading = true;
    try {
      const result = await this.uploadService.getAllCategory();
      this.categoryList = result.map((e: any) => ({ name: e, code: e }));
    } catch (error: any) {
      this.messageService.add({
        severity: 'error',
        summary: 'Could not load category list',
        detail: '',
      });
    } finally {
      this.loading = false;
    }
  }

  async loadAllAuthor() {
    this.loading = true;
    try {
      const result = await this.uploadService.getAllAuthor();
      this.authorList = result.map((e: any) => ({ name: e, code: e }));
    } catch (error: any) {
      this.messageService.add({
        severity: 'error',
        summary: 'Could not load author list',
        detail: '',
      });
    } finally {
      this.loading = false;
    }
  }

  showCreateNewCategoryModal() {
    this.createNewCategoryModalOpen = true;
  }

  showCreateNewAuthorModal() {
    this.createNewAuthorModalOpen = true;
  }

  async onSaveNewCategory() {
    if (!this.newCategory || this.newCategory.length === 0) {
      return;
    }
    this.loading = true;
    try {
      await this.uploadService.createNewCategory(this.newCategory);
      this.messageService.add({
        severity: 'success',
        summary: 'Created category',
        detail: '',
      });
      this.createNewCategoryModalOpen = false;
      this.newCategory = undefined;

      this.loadAllCategory();
    } catch (error: any) {
      this.messageService.add({
        severity: 'error',
        summary: error?.error?.detail?.error,
        detail: '',
      });
    } finally {
      this.loading = false;
    }
  }

  async onSaveNewAuthor() {
    if (!this.newAuthor || this.newAuthor.length === 0) {
      return;
    }
    this.loading = true;
    try {
      await this.uploadService.createNewAuthor(this.newAuthor);
      this.messageService.add({
        severity: 'success',
        summary: 'Created author',
        detail: '',
      });
      this.createNewAuthorModalOpen = false;
      this.newAuthor = undefined;
      this.loadAllAuthor();
    } catch (error: any) {
      this.messageService.add({
        severity: 'error',
        summary: error?.error?.detail?.error,
        detail: '',
      });
    } finally {
      this.loading = false;
    }
  }
}
