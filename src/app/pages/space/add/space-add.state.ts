import {SessionStore} from "@app/tools/session-store";

export class SpaceAddState {
  private _store = new SessionStore('space-add-form')
  constructor() {
  }
  private _identifier: string = '';
  private _name: string = '';
  private _isPublic: boolean = false;


  get identifier(): string { return this._store.getItem('identifier'); }
  set identifier(value: string) { this._store.setItem('identifier', value); }

  get name(): string { return this._store.getItem('name'); }
  set name(value: string) { this._store.setItem('name', value); }

  get isPublic(): string { return this._store.getItem('isPublic'); }
  set isPublic(value: string) { this._store.setItem('isPublic', value); }

}
