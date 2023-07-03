import { Component, OnInit } from '@angular/core';
import { PoiActions, PoiEntity, PoiSelectors } from '@monos/poi';
import { Store } from '@ngrx/store';

@Component({
  selector: 'monos-poi-list',
  templateUrl: './poi-list.component.html',
  styleUrls: ['./poi-list.component.css'],
})
export class PoiListComponent implements OnInit {
  pois$ = this.store.select(PoiSelectors.selectAllPoi);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(PoiActions.initPoi());
  }

  selectPoi(poi: PoiEntity) {
    this.store.dispatch(PoiActions.selectPoi({ poiId: poi.id }));
  }
}
