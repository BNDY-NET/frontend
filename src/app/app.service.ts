import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

export type InternalStateType = {
  [key: string]: any
};

@Injectable()
export class AppService {

  constructor(
    private http: Http,
  ){
  }

  getMainMenus(): Promise<any[]> {
    return this.http.get('/assets/mock-data/data.json').toPromise().then(res => res.json().mainMenus);
  }

  getSideMenus(): Promise<any[]> {
    return this.http.get('/assets/mock-data/data.json').toPromise().then(res => res.json().sideMenus);
  }

  getArticles(): Promise<any[]> {
    return this.http.get('/assets/mock-data/data.json').toPromise().then(res => res.json().articles);
  }
}

@Injectable()
export class AppState {

  public _state: InternalStateType = { };

  /**
   * Already return a clone of the current state.
   */
  public get state() {
    return this._state = this._clone(this._state);
  }
  /**
   * Never allow mutation
   */
  public set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }

  public get(prop?: any) {
    /**
     * Use our state getter for the clone.
     */
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : state;
  }

  public set(prop: string, value: any) {
    /**
     * Internally mutate our state.
     */
    return this._state[prop] = value;
  }

  private _clone(object: InternalStateType) {
    /**
     * Simple object clone.
     */
    return JSON.parse(JSON.stringify( object ));
  }
}
