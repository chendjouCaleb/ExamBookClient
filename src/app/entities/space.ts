import {BaseEntity} from "./entity";

export class Space extends BaseEntity<number>{
  _id: string
  name: string = "";
  identifier: string = "";
  normalizedIdentifier: string = "";

  isCertified: boolean;

  isPublic: boolean;

  get isPrivate(): boolean {
    return !this.isPublic
  }

  twitter: string = "";
  youtube: string = "";
  facebook: string  = "";
  instagram: string = "";
  website: string = "";

  publisherId: string = ""
}
