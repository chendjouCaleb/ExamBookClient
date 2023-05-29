import {ZonedDateTime} from "@js-joda/core";

export class BaseEntity<TID> {
  id: TID;
  createdAt: ZonedDateTime;
  deletedAt: ZonedDateTime;

  constructor(value?: any) {
    if (value != null) {
      this.id = value.id;

      this.createdAt = ZonedDateTime.parse(value.createdAt);

      if (value.deletedAt) {
        this.createdAt = ZonedDateTime.parse(value.deletedAt);
      }
    }
  }

  get isDeleted(): boolean {
    return this.deletedAt != null;
  }
}
