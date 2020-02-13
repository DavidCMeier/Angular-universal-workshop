import {Component, Inject, OnDestroy, OnInit, Optional, PLATFORM_ID} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {isPlatformServer} from '@angular/common';
import {RESPONSE} from '@nguniversal/express-engine/tokens';
import {Response} from 'express';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, OnDestroy {

  id: number;
  subscribe: Subscription[] = [];

  constructor(private route: ActivatedRoute,
              @Inject(PLATFORM_ID) private platformId: Object,
              @Optional() @Inject(RESPONSE) private response: Response) {
  }

  ngOnInit(): void {

    this.subscribe.push(this.route.params.subscribe((params) => {
      const idNumber = Number(params.id);
      this.id = !isNaN(idNumber) && idNumber > 100 && idNumber < 600 ? idNumber : 500;
      if (isPlatformServer(this.platformId)) {
        this.response.status(this.id);
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscribe.map((sub) => sub.unsubscribe());
  }
}
