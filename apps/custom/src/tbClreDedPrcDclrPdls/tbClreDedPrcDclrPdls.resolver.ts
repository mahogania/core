import * as graphql from "@nestjs/graphql";
import { TbClreDedPrcDclrPdlsResolverBase } from "./base/tbClreDedPrcDclrPdls.resolver.base";
import { TbClreDedPrcDclrPdls } from "./base/TbClreDedPrcDclrPdls";
import { TbClreDedPrcDclrPdlsService } from "./tbClreDedPrcDclrPdls.service";

@graphql.Resolver(() => TbClreDedPrcDclrPdls)
export class TbClreDedPrcDclrPdlsResolver extends TbClreDedPrcDclrPdlsResolverBase {
  constructor(protected readonly service: TbClreDedPrcDclrPdlsService) {
    super(service);
  }
}
