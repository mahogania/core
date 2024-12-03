import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkOrderOperationServiceBase } from "./base/workOrderOperation.service.base";

@Injectable()
export class WorkOrderOperationService extends WorkOrderOperationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
