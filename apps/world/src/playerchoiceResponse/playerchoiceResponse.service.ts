import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerchoiceResponseServiceBase } from "./base/playerchoiceResponse.service.base";

@Injectable()
export class PlayerchoiceResponseService extends PlayerchoiceResponseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
