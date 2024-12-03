import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FiscalYearServiceBase } from "./base/fiscalYear.service.base";

@Injectable()
export class FiscalYearService extends FiscalYearServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
