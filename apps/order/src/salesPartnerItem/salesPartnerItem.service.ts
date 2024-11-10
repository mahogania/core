import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalesPartnerItemServiceBase } from "./base/salesPartnerItem.service.base";

@Injectable()
export class SalesPartnerItemService extends SalesPartnerItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
