import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubcontractingOrderServiceBase } from "./base/subcontractingOrder.service.base";

@Injectable()
export class SubcontractingOrderService extends SubcontractingOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
