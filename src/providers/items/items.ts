import { Injectable } from '@angular/core';
import { Item } from '../../models/item';
import { Api } from '../api/api';

@Injectable()
export class Items {
  constructor(public api: Api) { }

  query(params?: any) {
    console.log('params', params);
    return this.api.get('/search/music_brainz', params);
  }

  add(item: Item) {
  }

  delete(item: Item) {
  }

}
