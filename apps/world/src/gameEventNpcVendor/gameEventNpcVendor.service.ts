import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameEventNpcVendorServiceBase } from "./base/gameEventNpcVendor.service.base";

@Injectable()
export class GameEventNpcVendorService extends GameEventNpcVendorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
