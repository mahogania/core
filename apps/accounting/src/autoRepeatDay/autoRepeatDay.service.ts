import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AutoRepeatDayServiceBase } from "./base/autoRepeatDay.service.base";

@Injectable()
export class AutoRepeatDayService extends AutoRepeatDayServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
