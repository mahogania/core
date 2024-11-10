import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BlanketOrderItemServiceBase } from "./base/blanketOrderItem.service.base";

@Injectable()
export class BlanketOrderItemService extends BlanketOrderItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
