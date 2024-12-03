import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubcontractingOrderServiceItemServiceBase } from "./base/subcontractingOrderServiceItem.service.base";

@Injectable()
export class SubcontractingOrderServiceItemService extends SubcontractingOrderServiceItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
