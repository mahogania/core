import * as graphql from "@nestjs/graphql";
import { ItemBarcodeResolverBase } from "./base/itemBarcode.resolver.base";
import { ItemBarcode } from "./base/ItemBarcode";
import { ItemBarcodeService } from "./itemBarcode.service";

@graphql.Resolver(() => ItemBarcode)
export class ItemBarcodeResolver extends ItemBarcodeResolverBase {
  constructor(protected readonly service: ItemBarcodeService) {
    super(service);
  }
}
