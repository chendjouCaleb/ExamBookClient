import {BaseEntity} from "@app/entities/entity";
import {Space} from "@app/entities/space";

export class Speciality extends BaseEntity<number> {
  constructor(value?: any) {
    super(value);
    this.spaceId = value.spaceId;
    this.normalizedName = value.normalizedName;
    this.name = value.name;
    this.normalizedName = value.normalizedName;
  }
  space: Space;
  spaceId: number;

  name: string = '';
  normalizedName: string = '';

  description: string = '';
}
