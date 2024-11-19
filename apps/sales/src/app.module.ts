import { Module } from "@nestjs/common";
import { BusinessModule } from "./business/business.module";
import { StrengthModule } from "./strength/strength.module";
import { WeaknessModule } from "./weakness/weakness.module";
import { OpportunityModule } from "./opportunity/opportunity.module";
import { ThreatModule } from "./threat/threat.module";
import { UnitModule } from "./unit/unit.module";
import { ProductModule } from "./product/product.module";
import { DiscountModule } from "./discount/discount.module";
import { InvoiceModule } from "./invoice/invoice.module";
import { ItemModule } from "./item/item.module";
import { QuoteModule } from "./quote/quote.module";
import { AddressModule } from "./address/address.module";
import { OrderModule } from "./order/order.module";
import { ProposalModule } from "./proposal/proposal.module";
import { ConfigurationModule } from "./configuration/configuration.module";
import { ConstraintModule } from "./constraint/constraint.module";
import { BundleModule } from "./bundle/bundle.module";
import { ProcessModule } from "./process/process.module";
import { PriceModule } from "./price/price.module";
import { PipelineModule } from "./pipeline/pipeline.module";
import { ContractModule } from "./contract/contract.module";
import { FeatureModule } from "./feature/feature.module";
import { OptionModule } from "./option/option.module";
import { TemplateModule } from "./template/template.module";
import { FormModule } from "./form/form.module";
import { CurrencyModule } from "./currency/currency.module";
import { IndustryModule } from "./industry/industry.module";
import { RelationModule } from "./relation/relation.module";
import { CustomerModule } from "./customer/customer.module";
import { DealModule } from "./deal/deal.module";
import { CatalogModule } from "./catalog/catalog.module";
import { LeadSourceModule } from "./leadSource/leadSource.module";
import { LeadModule } from "./lead/lead.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { NatsModule } from "./nats/nats.module";
import { StorageModule } from "./storage/storage.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    StorageModule,
    NatsModule,
    BusinessModule,
    StrengthModule,
    WeaknessModule,
    OpportunityModule,
    ThreatModule,
    UnitModule,
    ProductModule,
    DiscountModule,
    InvoiceModule,
    ItemModule,
    QuoteModule,
    AddressModule,
    OrderModule,
    ProposalModule,
    ConfigurationModule,
    ConstraintModule,
    BundleModule,
    ProcessModule,
    PriceModule,
    PipelineModule,
    ContractModule,
    FeatureModule,
    OptionModule,
    TemplateModule,
    FormModule,
    CurrencyModule,
    IndustryModule,
    RelationModule,
    CustomerModule,
    DealModule,
    CatalogModule,
    LeadSourceModule,
    LeadModule,
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
