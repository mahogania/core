import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StockEntryTypeServiceBase } from "./base/stockEntryType.service.base";

@Injectable()
export class StockEntryTypeService extends StockEntryTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
