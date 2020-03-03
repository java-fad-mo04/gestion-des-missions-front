
import { Title } from '@angular/platform-browser';
import { DataService } from '../services/data.service';
import { Event } from '../models/events';
import { Subscription } from 'rxjs';
import {
  Component,
   OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';

import { isSameDay,  isSameMonth} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent,  CalendarView} from 'angular-calendar';
import { colors } from '../models/colours';

@Component({
  selector: 'app-planning-mission',
  templateUrl: './planning-mission.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class PlanningMissionComponent implements OnInit {
  eventsC: Event[];
  eventSubscription: Subscription;
  viewDate: Date = new Date();

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  refresh: Subject<any> = new Subject();

  events: Event[];

  activeDayIsOpen: boolean = true;

  constructor(private _titleService: Title, private _dataService: DataService, private _modal: NgbModal) { }

  ngOnInit() {
    this._titleService.setTitle( 'Planning - GDM' );

    this.eventSubscription = this._dataService.eventSubject
    .subscribe((listeEvents: Event[]) => {
      this.eventsC = listeEvents; });

   this._dataService.getEvents();

  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }


  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  closeOpenYearViewDay() {
    this.activeDayIsOpen = false;
    this.viewDate =  new Date();
  }
}
