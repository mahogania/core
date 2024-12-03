import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HolidayListServiceBase } from "./base/holidayList.service.base";

@Injectable()
export class HolidayListService extends HolidayListServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
