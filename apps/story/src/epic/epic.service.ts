import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EpicServiceBase } from "./base/epic.service.base";

@Injectable()
export class EpicService extends EpicServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
