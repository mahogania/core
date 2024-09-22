import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayercreateinfoServiceBase } from "./base/playercreateinfo.service.base";

@Injectable()
export class PlayercreateinfoService extends PlayercreateinfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
