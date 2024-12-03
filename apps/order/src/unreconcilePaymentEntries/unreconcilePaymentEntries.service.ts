import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UnreconcilePaymentEntriesServiceBase } from "./base/unreconcilePaymentEntries.service.base";

@Injectable()
export class UnreconcilePaymentEntriesService extends UnreconcilePaymentEntriesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
