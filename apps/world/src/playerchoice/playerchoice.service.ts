import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerchoiceServiceBase } from "./base/playerchoice.service.base";

@Injectable()
export class PlayerchoiceService extends PlayerchoiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
