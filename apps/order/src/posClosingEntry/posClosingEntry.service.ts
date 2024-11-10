import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PosClosingEntryServiceBase } from "./base/posClosingEntry.service.base";

@Injectable()
export class PosClosingEntryService extends PosClosingEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
