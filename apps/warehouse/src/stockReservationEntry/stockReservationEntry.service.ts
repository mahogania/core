import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StockReservationEntryServiceBase } from "./base/stockReservationEntry.service.base";

@Injectable()
export class StockReservationEntryService extends StockReservationEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
