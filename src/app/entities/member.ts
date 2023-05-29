import {BaseEntity} from "./entity";
import {Space} from "./space";

export class Member extends BaseEntity<number> {
    userId: string = '';

    space: Space
    spaceId: number;

    isAdmin: boolean;

    publisherId: string = '';
}
