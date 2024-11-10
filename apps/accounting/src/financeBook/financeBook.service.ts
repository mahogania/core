import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FinanceBookServiceBase } from "./base/financeBook.service.base";

@Injectable()
export class FinanceBookService extends FinanceBookServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
