import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayercreateinfoActionServiceBase } from "./base/playercreateinfoAction.service.base";

@Injectable()
export class PlayercreateinfoActionService extends PlayercreateinfoActionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
