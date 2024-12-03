import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeferredAccountingServiceBase } from "./base/deferredAccounting.service.base";

@Injectable()
export class DeferredAccountingService extends DeferredAccountingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
