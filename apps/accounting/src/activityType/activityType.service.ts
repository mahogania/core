import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ActivityTypeServiceBase } from "./base/activityType.service.base";

@Injectable()
export class ActivityTypeService extends ActivityTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
