import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TbClreDedPrcDclrPdlsServiceBase } from "./base/tbClreDedPrcDclrPdls.service.base";

@Injectable()
export class TbClreDedPrcDclrPdlsService extends TbClreDedPrcDclrPdlsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
