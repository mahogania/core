import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JumpChargeParamsServiceBase } from "./base/jumpChargeParams.service.base";

@Injectable()
export class JumpChargeParamsService extends JumpChargeParamsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
