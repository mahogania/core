import * as graphql from "@nestjs/graphql";
import { BomWebsiteOperationResolverBase } from "./base/bomWebsiteOperation.resolver.base";
import { BomWebsiteOperation } from "./base/BomWebsiteOperation";
import { BomWebsiteOperationService } from "./bomWebsiteOperation.service";

@graphql.Resolver(() => BomWebsiteOperation)
export class BomWebsiteOperationResolver extends BomWebsiteOperationResolverBase {
  constructor(protected readonly service: BomWebsiteOperationService) {
    super(service);
  }
}
