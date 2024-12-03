import * as graphql from "@nestjs/graphql";
import { ShipmentParcelTemplateResolverBase } from "./base/shipmentParcelTemplate.resolver.base";
import { ShipmentParcelTemplate } from "./base/ShipmentParcelTemplate";
import { ShipmentParcelTemplateService } from "./shipmentParcelTemplate.service";

@graphql.Resolver(() => ShipmentParcelTemplate)
export class ShipmentParcelTemplateResolver extends ShipmentParcelTemplateResolverBase {
  constructor(protected readonly service: ShipmentParcelTemplateService) {
    super(service);
  }
}
