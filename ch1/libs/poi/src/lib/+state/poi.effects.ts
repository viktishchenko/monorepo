import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as PoiActions from './poi.actions';
import { map } from 'rxjs/operators';
import { PoiService } from '../poi.service';

@Injectable()
export class PoiEffects {
  constructor(private actions$: Actions, private poiService: PoiService) {}
  /* 
effect responsible for listening actions that dispatched in store
*/
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PoiActions.initPoi),
      fetch({
        run: (action) => {
          return this.poiService
            .getAll()
            .pipe(map((pois) => PoiActions.loadPoiSuccess({ poi: pois })));
        },

        onError: (action, error) => {
          console.error('Error', error);
          return PoiActions.loadPoiFailure({ error });
        },
      })
    )
  );
}
