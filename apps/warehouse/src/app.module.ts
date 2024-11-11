import { Module } from "@nestjs/common";
import { BomCreatorItemModule } from "./bomCreatorItem/bomCreatorItem.module";
import { BomCreatorModule } from "./bomCreator/bomCreator.module";
import { BomExplosionItemModule } from "./bomExplosionItem/bomExplosionItem.module";
import { BomItemModule } from "./bomItem/bomItem.module";
import { BomOperationModule } from "./bomOperation/bomOperation.module";
import { BomScrapItemModule } from "./bomScrapItem/bomScrapItem.module";
import { BomUpdateBatchModule } from "./bomUpdateBatch/bomUpdateBatch.module";
import { BomUpdateLogModule } from "./bomUpdateLog/bomUpdateLog.module";
import { BomWebsiteItemModule } from "./bomWebsiteItem/bomWebsiteItem.module";
import { BomWebsiteOperationModule } from "./bomWebsiteOperation/bomWebsiteOperation.module";
import { BomModule } from "./bom/bom.module";
import { BatchModule } from "./batch/batch.module";
import { BinModule } from "./bin/bin.module";
import { InstallationNoteItemModule } from "./installationNoteItem/installationNoteItem.module";
import { InventoryDimensionModule } from "./inventoryDimension/inventoryDimension.module";
import { LandedCostItemModule } from "./landedCostItem/landedCostItem.module";
import { LandedCostTaxesAndChargesModule } from "./landedCostTaxesAndCharges/landedCostTaxesAndCharges.module";
import { LandedCostPurchaseReceiptModule } from "./landedCostPurchaseReceipt/landedCostPurchaseReceipt.module";
import { LandedCostVoucherModule } from "./landedCostVoucher/landedCostVoucher.module";
import { MaintenanceScheduleItemModule } from "./maintenanceScheduleItem/maintenanceScheduleItem.module";
import { MaintenanceScheduleModule } from "./maintenanceSchedule/maintenanceSchedule.module";
import { MaintenanceTeamMemberModule } from "./maintenanceTeamMember/maintenanceTeamMember.module";
import { MaintenanceVisitPurposeModule } from "./maintenanceVisitPurpose/maintenanceVisitPurpose.module";
import { MaintenanceVisitModule } from "./maintenanceVisit/maintenanceVisit.module";
import { MaterialRequestItemModule } from "./materialRequestItem/materialRequestItem.module";
import { ManufacturerModule } from "./manufacturer/manufacturer.module";
import { MaterialRequestPlanItemModule } from "./materialRequestPlanItem/materialRequestPlanItem.module";
import { MaterialRequestModule } from "./materialRequest/materialRequest.module";
import { PackedItemModule } from "./packedItem/packedItem.module";
import { PackingSlipItemModule } from "./packingSlipItem/packingSlipItem.module";
import { PackingSlipModule } from "./packingSlip/packingSlip.module";
import { ProductionPlanItemReferenceModule } from "./productionPlanItemReference/productionPlanItemReference.module";
import { ProductionPlanMaterialRequestWarehouseModule } from "./productionPlanMaterialRequestWarehouse/productionPlanMaterialRequestWarehouse.module";
import { ProductionPlanSubAssemblyItemModule } from "./productionPlanSubAssemblyItem/productionPlanSubAssemblyItem.module";
import { ProductionPlanMaterialRequestModule } from "./productionPlanMaterialRequest/productionPlanMaterialRequest.module";
import { ProductionPlanItemModule } from "./productionPlanItem/productionPlanItem.module";
import { ProductionPlanSalesOrderModule } from "./productionPlanSalesOrder/productionPlanSalesOrder.module";
import { ProductionPlanModule } from "./productionPlan/productionPlan.module";
import { SerialNoModule } from "./serialNo/serialNo.module";
import { SerialAndBatchEntryModule } from "./serialAndBatchEntry/serialAndBatchEntry.module";
import { SerialAndBatchBundleModule } from "./serialAndBatchBundle/serialAndBatchBundle.module";
import { StockEntryDetailModule } from "./stockEntryDetail/stockEntryDetail.module";
import { StockEntryTypeModule } from "./stockEntryType/stockEntryType.module";
import { StockLedgerEntryModule } from "./stockLedgerEntry/stockLedgerEntry.module";
import { StockReconciliationItemModule } from "./stockReconciliationItem/stockReconciliationItem.module";
import { StockReservationEntryModule } from "./stockReservationEntry/stockReservationEntry.module";
import { StockReconciliationModule } from "./stockReconciliation/stockReconciliation.module";
import { SubcontractingBomModule } from "./subcontractingBom/subcontractingBom.module";
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
    BomCreatorItemModule,
    BomCreatorModule,
    BomExplosionItemModule,
    BomItemModule,
    BomOperationModule,
    BomScrapItemModule,
    BomUpdateBatchModule,
    BomUpdateLogModule,
    BomWebsiteItemModule,
    BomWebsiteOperationModule,
    BomModule,
    BatchModule,
    BinModule,
    InstallationNoteItemModule,
    InventoryDimensionModule,
    LandedCostItemModule,
    LandedCostTaxesAndChargesModule,
    LandedCostPurchaseReceiptModule,
    LandedCostVoucherModule,
    MaintenanceScheduleItemModule,
    MaintenanceScheduleModule,
    MaintenanceTeamMemberModule,
    MaintenanceVisitPurposeModule,
    MaintenanceVisitModule,
    MaterialRequestItemModule,
    ManufacturerModule,
    MaterialRequestPlanItemModule,
    MaterialRequestModule,
    PackedItemModule,
    PackingSlipItemModule,
    PackingSlipModule,
    ProductionPlanItemReferenceModule,
    ProductionPlanMaterialRequestWarehouseModule,
    ProductionPlanSubAssemblyItemModule,
    ProductionPlanMaterialRequestModule,
    ProductionPlanItemModule,
    ProductionPlanSalesOrderModule,
    ProductionPlanModule,
    SerialNoModule,
    SerialAndBatchEntryModule,
    SerialAndBatchBundleModule,
    StockEntryDetailModule,
    StockEntryTypeModule,
    StockLedgerEntryModule,
    StockReconciliationItemModule,
    StockReservationEntryModule,
    StockReconciliationModule,
    SubcontractingBomModule,
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
