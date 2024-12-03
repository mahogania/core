import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StockLedgerEntryServiceBase } from "./base/stockLedgerEntry.service.base";

@Injectable()
export class StockLedgerEntryService extends StockLedgerEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
