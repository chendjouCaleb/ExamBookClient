import {Actor} from "./actor";

export class Event {
  id: number = 0;
  createdAt: Date;

  name: string = '';
  dataValue: string = '';

  actor: Actor;
  actorId: string = '';
}
