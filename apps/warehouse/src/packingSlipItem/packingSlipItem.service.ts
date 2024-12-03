import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PackingSlipItemServiceBase } from "./base/packingSlipItem.service.base";

@Injectable()
export class PackingSlipItemService extends PackingSlipItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
