import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CashierClosingServiceBase } from "./base/cashierClosing.service.base";

@Injectable()
export class CashierClosingService extends CashierClosingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
