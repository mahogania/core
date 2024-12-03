import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PosProfileUserServiceBase } from "./base/posProfileUser.service.base";

@Injectable()
export class PosProfileUserService extends PosProfileUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
