import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerCreditLimitServiceBase } from "./base/customerCreditLimit.service.base";

@Injectable()
export class CustomerCreditLimitService extends CustomerCreditLimitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
