import { Component } from '@angular/core';
import { PoiSelectors } from '@monos/poi';
import { Store } from '@ngrx/store';

@Component({
  selector: 'monos-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  poi$ = this.store.select(PoiSelectors.selectSelectedId);

  constructor(private store: Store) {}
}
