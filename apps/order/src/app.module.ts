import { Module } from "@nestjs/common";
import { BlanketOrderItemModule } from "./blanketOrderItem/blanketOrderItem.module";
import { BlanketOrderModule } from "./blanketOrder/blanketOrder.module";
import { InvoiceDiscountingModule } from "./invoiceDiscounting/invoiceDiscounting.module";
import { ItemAlternativeModule } from "./itemAlternative/itemAlternative.module";
import { ItemAttributeValueModule } from "./itemAttributeValue/itemAttributeValue.module";
import { ItemAttributeModule } from "./itemAttribute/itemAttribute.module";
import { ItemBarcodeModule } from "./itemBarcode/itemBarcode.module";
import { ItemCustomerDetailModule } from "./itemCustomerDetail/itemCustomerDetail.module";
import { ItemDefaultModule } from "./itemDefault/itemDefault.module";
import { ItemGroupModule } from "./itemGroup/itemGroup.module";
import { ItemManufacturerModule } from "./itemManufacturer/itemManufacturer.module";
import { ItemPriceModule } from "./itemPrice/itemPrice.module";
import { ItemReorderModule } from "./itemReorder/itemReorder.module";
import { ItemSupplierModule } from "./itemSupplier/itemSupplier.module";
import { ItemTaxTemplateDetailModule } from "./itemTaxTemplateDetail/itemTaxTemplateDetail.module";
import { ItemTaxTemplateModule } from "./itemTaxTemplate/itemTaxTemplate.module";
import { ItemTaxModule } from "./itemTax/itemTax.module";
import { ItemVariantModule } from "./itemVariant/itemVariant.module";
import { ItemModule } from "./item/item.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    BlanketOrderItemModule,
    BlanketOrderModule,
    InvoiceDiscountingModule,
    ItemAlternativeModule,
    ItemAttributeValueModule,
    ItemAttributeModule,
    ItemBarcodeModule,
    ItemCustomerDetailModule,
    ItemDefaultModule,
    ItemGroupModule,
    ItemManufacturerModule,
    ItemPriceModule,
    ItemReorderModule,
    ItemSupplierModule,
    ItemTaxTemplateDetailModule,
    ItemTaxTemplateModule,
    ItemTaxModule,
    ItemVariantModule,
    ItemModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
