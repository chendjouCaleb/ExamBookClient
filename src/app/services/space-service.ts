import {Injectable} from "@angular/core";
import {Space} from "@app/entities";
import {SpaceAddModel} from "@app/models";

@Injectable({providedIn: 'root'})
export class SpaceService {
  private _db = new PouchDB('spacebook')
    constructor() {
      const request = indexedDB.open('spaces.db', 1);
      request.onupgradeneeded = (event) => {
        request.result.createObjectStore('spaces', {autoIncrement: true});
        request.result.createObjectStore('members', {autoIncrement: true});
      }

    }

    async list(): Promise<Space[]> {
        throw new Error('NotImplemented');
    }

    async getByIdAsync(): Promise<Space> {
      throw new Error('NotImplemented');
    }

    async getByIdentifier(name: string): Promise<Space> {
      throw new Error('NotImplemented');
    }

    async addAsync(model: SpaceAddModel) {
      const space = new Space();
      space._id = new Date().toISOString();
      space.name = model.name;
      space.isPublic = model.isPublic;
      space.identifier = model.identifier;

      this._db.put('')
    }


}
