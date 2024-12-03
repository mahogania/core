import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalesOrderItemServiceBase } from "./base/salesOrderItem.service.base";

@Injectable()
export class SalesOrderItemService extends SalesOrderItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
