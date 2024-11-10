import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JobCardOperationServiceBase } from "./base/jobCardOperation.service.base";

@Injectable()
export class JobCardOperationService extends JobCardOperationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
