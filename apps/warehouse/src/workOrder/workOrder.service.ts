import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkOrderServiceBase } from "./base/workOrder.service.base";

@Injectable()
export class WorkOrderService extends WorkOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
