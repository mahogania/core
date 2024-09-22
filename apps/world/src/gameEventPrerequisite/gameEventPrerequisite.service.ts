import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameEventPrerequisiteServiceBase } from "./base/gameEventPrerequisite.service.base";

@Injectable()
export class GameEventPrerequisiteService extends GameEventPrerequisiteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
