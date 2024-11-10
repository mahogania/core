import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PortalServiceBase } from "./base/portal.service.base";

@Injectable()
export class PortalService extends PortalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
