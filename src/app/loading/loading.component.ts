import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  show() {
    this.loadingSubject.next(true);
  }

  hide() {
    this.loadingSubject.next(false);
  }
}
