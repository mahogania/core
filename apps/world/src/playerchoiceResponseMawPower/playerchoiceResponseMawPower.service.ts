import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerchoiceResponseMawPowerServiceBase } from "./base/playerchoiceResponseMawPower.service.base";

@Injectable()
export class PlayerchoiceResponseMawPowerService extends PlayerchoiceResponseMawPowerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
