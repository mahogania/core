import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TbClreDedRimexPrngPdlsServiceBase } from "./base/tbClreDedRimexPrngPdls.service.base";

@Injectable()
export class TbClreDedRimexPrngPdlsService extends TbClreDedRimexPrngPdlsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
