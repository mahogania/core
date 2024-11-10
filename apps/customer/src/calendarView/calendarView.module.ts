import { Module } from "@nestjs/common";
import { CalendarViewModuleBase } from "./base/calendarView.module.base";
import { CalendarViewService } from "./calendarView.service";
import { CalendarViewController } from "./calendarView.controller";
import { CalendarViewResolver } from "./calendarView.resolver";

@Module({
  imports: [CalendarViewModuleBase],
  controllers: [CalendarViewController],
  providers: [CalendarViewService, CalendarViewResolver],
  exports: [CalendarViewService],
})
export class CalendarViewModule {}
