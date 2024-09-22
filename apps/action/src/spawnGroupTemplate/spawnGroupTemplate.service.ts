import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SpawnGroupTemplateServiceBase } from "./base/spawnGroupTemplate.service.base";

@Injectable()
export class SpawnGroupTemplateService extends SpawnGroupTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
