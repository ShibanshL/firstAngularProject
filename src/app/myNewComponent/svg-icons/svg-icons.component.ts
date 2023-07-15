// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-svg-icons',
//   templateUrl: './svg-icons.component.html',
//   styleUrls: ['./svg-icons.component.css']
// })
// export class SVGICONSComponent {

// }

import { Component, OnChanges, SecurityContext, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-icon',
  template: `<span [innerHTML]="svgIcon"></span>`,
  styleUrls: ['./svg-icons.component.css'],
})
export class SvgIconsComponent implements OnChanges {
  @Input()
  public name?: string;

  public svgIcon: any;

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  public ngOnChanges(): void {
    if (!this.name) {
      this.svgIcon = '';
      return;
    }
    this.httpClient
      .get(`assets/images/svg/${this.name}.svg`, { responseType: 'text' })
      .subscribe((value) => {
        this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(value);
      });
  }
}
