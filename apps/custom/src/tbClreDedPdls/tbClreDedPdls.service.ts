import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TbClreDedPdlsServiceBase } from "./base/tbClreDedPdls.service.base";

@Injectable()
export class TbClreDedPdlsService extends TbClreDedPdlsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
