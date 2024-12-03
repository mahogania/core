import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubcontractingOrderItemServiceBase } from "./base/subcontractingOrderItem.service.base";

@Injectable()
export class SubcontractingOrderItemService extends SubcontractingOrderItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
