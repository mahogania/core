import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CalendarViewServiceBase } from "./base/calendarView.service.base";

@Injectable()
export class CalendarViewService extends CalendarViewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
