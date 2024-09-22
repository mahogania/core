import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LfgDungeonTemplateServiceBase } from "./base/lfgDungeonTemplate.service.base";

@Injectable()
export class LfgDungeonTemplateService extends LfgDungeonTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
