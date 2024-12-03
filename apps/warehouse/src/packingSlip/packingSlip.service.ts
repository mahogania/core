import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PackingSlipServiceBase } from "./base/packingSlip.service.base";

@Injectable()
export class PackingSlipService extends PackingSlipServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
