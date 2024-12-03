import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PosCustomerGroupServiceBase } from "./base/posCustomerGroup.service.base";

@Injectable()
export class PosCustomerGroupService extends PosCustomerGroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
