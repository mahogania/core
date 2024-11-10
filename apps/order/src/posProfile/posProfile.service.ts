import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PosProfileServiceBase } from "./base/posProfile.service.base";

@Injectable()
export class PosProfileService extends PosProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
