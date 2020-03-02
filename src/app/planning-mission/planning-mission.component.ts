import {
  Component, OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-planning-mission',
  templateUrl: './planning-mission.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanningMissionComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

view: CalendarView = CalendarView.Month;

CalendarView = CalendarView;

viewDate: Date = new Date();

modalData: {
  action: string;
  event: CalendarEvent;
};
refresh: Subject<any> = new Subject();
activeDayIsOpen: boolean = true;


  constructor(private _titleService: Title, private _modal: NgbModal) { }

  ngOnInit() {
    this._titleService.setTitle( 'Planning - GDM' );
  }


  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
