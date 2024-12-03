import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuotationLostReasonDetailServiceBase } from "./base/quotationLostReasonDetail.service.base";

@Injectable()
export class QuotationLostReasonDetailService extends QuotationLostReasonDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
