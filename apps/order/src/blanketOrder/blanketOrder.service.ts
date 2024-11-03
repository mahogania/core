import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BlanketOrderServiceBase } from "./base/blanketOrder.service.base";

@Injectable()
export class BlanketOrderService extends BlanketOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
