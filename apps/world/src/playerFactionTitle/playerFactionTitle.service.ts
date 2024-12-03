import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerFactionTitleServiceBase } from "./base/playerFactionTitle.service.base";

@Injectable()
export class PlayerFactionTitleService extends PlayerFactionTitleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
