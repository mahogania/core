import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayercreateinfoItemServiceBase } from "./base/playercreateinfoItem.service.base";

@Injectable()
export class PlayercreateinfoItemService extends PlayercreateinfoItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
