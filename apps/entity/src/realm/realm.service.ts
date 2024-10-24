import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RealmServiceBase } from "./base/realm.service.base";

@Injectable()
export class RealmService extends RealmServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
