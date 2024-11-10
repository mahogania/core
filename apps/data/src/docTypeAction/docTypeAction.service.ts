import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocTypeActionServiceBase } from "./base/docTypeAction.service.base";

@Injectable()
export class DocTypeActionService extends DocTypeActionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
