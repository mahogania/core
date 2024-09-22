import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GossipMenuOptionServiceBase } from "./base/gossipMenuOption.service.base";

@Injectable()
export class GossipMenuOptionService extends GossipMenuOptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
