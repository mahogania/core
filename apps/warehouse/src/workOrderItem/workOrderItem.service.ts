import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkOrderItemServiceBase } from "./base/workOrderItem.service.base";

@Injectable()
export class WorkOrderItemService extends WorkOrderItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
