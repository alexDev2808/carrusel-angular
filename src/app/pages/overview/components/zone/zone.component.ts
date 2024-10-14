import { Component } from '@angular/core';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DropzoneCdkModule } from '@ngx-dropzone/cdk';
import { DropzoneMaterialModule } from '@ngx-dropzone/material';

@Component({
  selector: 'app-zone',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    DropzoneCdkModule,
    DropzoneMaterialModule
  ],
  templateUrl: './zone.component.html',
  styleUrl: './zone.component.css'
})
export class ZoneComponent {

  filesCtrl = new FormControl<File[]>([]);

  get files() {
    const _files = this.filesCtrl.value;

    if (!_files) return [];
    return Array.isArray(_files) ? _files : [_files];
  }

  remove(file: File) {
    if (Array.isArray(this.filesCtrl.value)) {
      this.filesCtrl.setValue(this.filesCtrl.value.filter((i) => i !== file));
      return;
    }

    this.filesCtrl.setValue(null);
  }

}
