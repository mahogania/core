import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SerialNoServiceBase } from "./base/serialNo.service.base";

@Injectable()
export class SerialNoService extends SerialNoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
