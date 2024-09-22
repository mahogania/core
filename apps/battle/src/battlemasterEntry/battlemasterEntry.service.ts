import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BattlemasterEntryServiceBase } from "./base/battlemasterEntry.service.base";

@Injectable()
export class BattlemasterEntryService extends BattlemasterEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
