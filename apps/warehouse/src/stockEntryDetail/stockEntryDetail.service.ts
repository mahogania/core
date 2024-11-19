import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StockEntryDetailServiceBase } from "./base/stockEntryDetail.service.base";

@Injectable()
export class StockEntryDetailService extends StockEntryDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
