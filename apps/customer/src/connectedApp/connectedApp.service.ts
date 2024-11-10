import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConnectedAppServiceBase } from "./base/connectedApp.service.base";

@Injectable()
export class ConnectedAppService extends ConnectedAppServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
