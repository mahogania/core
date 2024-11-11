import * as graphql from "@nestjs/graphql";
import { UomConversionDetailResolverBase } from "./base/uomConversionDetail.resolver.base";
import { UomConversionDetail } from "./base/UomConversionDetail";
import { UomConversionDetailService } from "./uomConversionDetail.service";

@graphql.Resolver(() => UomConversionDetail)
export class UomConversionDetailResolver extends UomConversionDetailResolverBase {
  constructor(protected readonly service: UomConversionDetailService) {
    super(service);
  }
}
