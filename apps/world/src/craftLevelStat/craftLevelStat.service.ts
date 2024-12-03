import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CraftLevelStatServiceBase } from "./base/craftLevelStat.service.base";

@Injectable()
export class CraftLevelStatService extends CraftLevelStatServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
