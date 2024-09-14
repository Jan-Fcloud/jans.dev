import { Component, Input, signal, effect } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  template: `
  <div class="loading">
    <img src="../../assets/Spin@1x-1.0s-200px-200px.svg" alt="loading">
  </div>
  `,
  styleUrl: './loading.component.scss'
})

export class LoadingComponent {
  ngOnInit() {

  }
}
