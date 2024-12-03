import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubcontractingOrderSuppliedItemServiceBase } from "./base/subcontractingOrderSuppliedItem.service.base";

@Injectable()
export class SubcontractingOrderSuppliedItemService extends SubcontractingOrderSuppliedItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
