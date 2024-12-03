import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureLevelStatServiceBase } from "./base/creatureLevelStat.service.base";

@Injectable()
export class CreatureLevelStatService extends CreatureLevelStatServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
