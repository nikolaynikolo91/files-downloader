import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'upload-list';
  list: { file: File; href: string }[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  onChange(event: Event) {
    const file = (<HTMLInputElement>event?.target).files![0];
    this.onUpload(file);
  }

  onUpload(file: File) {
    this.list.push({ file, href: window.URL.createObjectURL(file) });
    console.log(this.list);
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
