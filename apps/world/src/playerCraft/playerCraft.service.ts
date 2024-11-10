import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerCraftServiceBase } from "./base/playerCraft.service.base";

@Injectable()
export class PlayerCraftService extends PlayerCraftServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
