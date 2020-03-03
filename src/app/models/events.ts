/**
 * Events.
 */
import { CalendarEvent } from 'angular-calendar';
import { colors } from './colours';

export interface Event extends CalendarEvent {
    id: number;
     start: Date;
     end: Date;
     title: string;
     color?: any;
}
