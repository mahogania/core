import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureLootServiceBase } from "./base/creatureLoot.service.base";

@Injectable()
export class CreatureLootService extends CreatureLootServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
