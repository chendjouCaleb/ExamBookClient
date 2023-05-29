import {Subscription} from "./subscription";
import {Event} from "./event";

export class Publisher {
  id: string = '';
  createdAt: Date;

  subscriptions: Subscription[] = [];
}


export class PublisherEvent {
  id: number = 0;
  publisher: Publisher;
  publisherId: string = '';

  event: Event;
  eventId: number;
}
