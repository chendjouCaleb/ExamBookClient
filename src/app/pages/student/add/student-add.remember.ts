import {SessionStore} from "@app/tools/session-store";
import {LocalDate} from "@js-joda/core";

export class StudentAddRemember {
  private _store = new SessionStore('student-add-form')
  constructor() {
  }

  get userId(): string { return this._store.getItem('userId'); }
  set userId(value: string) { this._store.setItem('userId', value); }

  get code(): string { return this._store.getItem('code'); }
  set code(value: string) { this._store.setItem('code', value); }

  get firstName(): string { return this._store.getItem('firstName'); }
  set firstName(value: string) { this._store.setItem('firstName', value); }

  get lastName(): string { return this._store.getItem('lastName'); }
  set lastName(value: string) { this._store.setItem('lastName', value); }

  get birthDate(): LocalDate {
    const date = this._store.getItem('birthDate');
    if(date) {
      return LocalDate.parse(this._store.getItem('birthDate'));
    }
    return null;
  }
  set birthDate(value: LocalDate) { this._store.setItem('birthDate', value.toString()); }

  get sex(): string { return this._store.getItem('sex'); }
  set sex(value: string) { this._store.setItem('sex', value); }

  get imageUrl(): string { return this._store.getItem('imageUrl'); }
  set imageUrl(value: string) { this._store.setItem('imageUrl', value); }

  get specialityIds(): number[] { return this._store.getItem('specialityIds'); }
  set specialityIds(value: number[]) { this._store.setItem('specialityIds', value); }

}
