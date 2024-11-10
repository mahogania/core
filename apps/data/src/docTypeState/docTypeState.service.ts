import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocTypeStateServiceBase } from "./base/docTypeState.service.base";

@Injectable()
export class DocTypeStateService extends DocTypeStateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
