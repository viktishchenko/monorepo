import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as PoiActions from './poi.actions';
import * as PoiFeature from './poi.reducer';

@Injectable()
export class PoiEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PoiActions.initPoi),
      switchMap(() => of(PoiActions.loadPoiSuccess({ poi: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(PoiActions.loadPoiFailure({ error }));
      })
    )
  );
}
