import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameEventModelEquipServiceBase } from "./base/gameEventModelEquip.service.base";

@Injectable()
export class GameEventModelEquipService extends GameEventModelEquipServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
