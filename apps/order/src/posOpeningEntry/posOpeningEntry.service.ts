import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PosOpeningEntryServiceBase } from "./base/posOpeningEntry.service.base";

@Injectable()
export class PosOpeningEntryService extends PosOpeningEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
