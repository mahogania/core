import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LinkedRespawnServiceBase } from "./base/linkedRespawn.service.base";

@Injectable()
export class LinkedRespawnService extends LinkedRespawnServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
