/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { StockEntryDetailService } from "../stockEntryDetail.service";
import { StockEntryDetailCreateInput } from "./StockEntryDetailCreateInput";
import { StockEntryDetail } from "./StockEntryDetail";
import { StockEntryDetailFindManyArgs } from "./StockEntryDetailFindManyArgs";
import { StockEntryDetailWhereUniqueInput } from "./StockEntryDetailWhereUniqueInput";
import { StockEntryDetailUpdateInput } from "./StockEntryDetailUpdateInput";

export class StockEntryDetailControllerBase {
  constructor(protected readonly service: StockEntryDetailService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: StockEntryDetail })
  async createStockEntryDetail(
    @common.Body() data: StockEntryDetailCreateInput
  ): Promise<StockEntryDetail> {
    return await this.service.createStockEntryDetail({
      data: data,
      select: {
        actualQty: true,
        additionalCost: true,
        againstStockEntry: true,
        allowAlternativeItem: true,
        allowZeroValuationRate: true,
        amount: true,
        barcode: true,
        basicAmount: true,
        basicRate: true,
        batchNo: true,
        bomNo: true,
        conversionFactor: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        description: true,
        docstatus: true,
        expenseAccount: true,
        hasItemScanned: true,
        id: true,
        idx: true,
        image: true,
        isFinishedItem: true,
        isScrapItem: true,
        itemCode: true,
        itemGroup: true,
        itemName: true,
        jobCardItem: true,
        materialRequest: true,
        materialRequestItem: true,
        modified: true,
        modifiedBy: true,
        name: true,
        originalItem: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        poDetail: true,
        project: true,
        putawayRule: true,
        qty: true,
        qualityInspection: true,
        referencePurchaseReceipt: true,
        retainSample: true,
        sWarehouse: true,
        sampleQuantity: true,
        scoRmDetail: true,
        serialAndBatchBundle: true,
        serialNo: true,
        setBasicRateManually: true,
        steDetail: true,
        stockUom: true,
        subcontractedItem: true,
        tWarehouse: true,
        transferQty: true,
        transferredQty: true,
        uom: true,
        updatedAt: true,
        useSerialBatchFields: true,
        valuationRate: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [StockEntryDetail] })
  @ApiNestedQuery(StockEntryDetailFindManyArgs)
  async stockEntryDetails(
    @common.Req() request: Request
  ): Promise<StockEntryDetail[]> {
    const args = plainToClass(StockEntryDetailFindManyArgs, request.query);
    return this.service.stockEntryDetails({
      ...args,
      select: {
        actualQty: true,
        additionalCost: true,
        againstStockEntry: true,
        allowAlternativeItem: true,
        allowZeroValuationRate: true,
        amount: true,
        barcode: true,
        basicAmount: true,
        basicRate: true,
        batchNo: true,
        bomNo: true,
        conversionFactor: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        description: true,
        docstatus: true,
        expenseAccount: true,
        hasItemScanned: true,
        id: true,
        idx: true,
        image: true,
        isFinishedItem: true,
        isScrapItem: true,
        itemCode: true,
        itemGroup: true,
        itemName: true,
        jobCardItem: true,
        materialRequest: true,
        materialRequestItem: true,
        modified: true,
        modifiedBy: true,
        name: true,
        originalItem: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        poDetail: true,
        project: true,
        putawayRule: true,
        qty: true,
        qualityInspection: true,
        referencePurchaseReceipt: true,
        retainSample: true,
        sWarehouse: true,
        sampleQuantity: true,
        scoRmDetail: true,
        serialAndBatchBundle: true,
        serialNo: true,
        setBasicRateManually: true,
        steDetail: true,
        stockUom: true,
        subcontractedItem: true,
        tWarehouse: true,
        transferQty: true,
        transferredQty: true,
        uom: true,
        updatedAt: true,
        useSerialBatchFields: true,
        valuationRate: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: StockEntryDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async stockEntryDetail(
    @common.Param() params: StockEntryDetailWhereUniqueInput
  ): Promise<StockEntryDetail | null> {
    const result = await this.service.stockEntryDetail({
      where: params,
      select: {
        actualQty: true,
        additionalCost: true,
        againstStockEntry: true,
        allowAlternativeItem: true,
        allowZeroValuationRate: true,
        amount: true,
        barcode: true,
        basicAmount: true,
        basicRate: true,
        batchNo: true,
        bomNo: true,
        conversionFactor: true,
        costCenter: true,
        createdAt: true,
        creation: true,
        description: true,
        docstatus: true,
        expenseAccount: true,
        hasItemScanned: true,
        id: true,
        idx: true,
        image: true,
        isFinishedItem: true,
        isScrapItem: true,
        itemCode: true,
        itemGroup: true,
        itemName: true,
        jobCardItem: true,
        materialRequest: true,
        materialRequestItem: true,
        modified: true,
        modifiedBy: true,
        name: true,
        originalItem: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        poDetail: true,
        project: true,
        putawayRule: true,
        qty: true,
        qualityInspection: true,
        referencePurchaseReceipt: true,
        retainSample: true,
        sWarehouse: true,
        sampleQuantity: true,
        scoRmDetail: true,
        serialAndBatchBundle: true,
        serialNo: true,
        setBasicRateManually: true,
        steDetail: true,
        stockUom: true,
        subcontractedItem: true,
        tWarehouse: true,
        transferQty: true,
        transferredQty: true,
        uom: true,
        updatedAt: true,
        useSerialBatchFields: true,
        valuationRate: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: StockEntryDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStockEntryDetail(
    @common.Param() params: StockEntryDetailWhereUniqueInput,
    @common.Body() data: StockEntryDetailUpdateInput
  ): Promise<StockEntryDetail | null> {
    try {
      return await this.service.updateStockEntryDetail({
        where: params,
        data: data,
        select: {
          actualQty: true,
          additionalCost: true,
          againstStockEntry: true,
          allowAlternativeItem: true,
          allowZeroValuationRate: true,
          amount: true,
          barcode: true,
          basicAmount: true,
          basicRate: true,
          batchNo: true,
          bomNo: true,
          conversionFactor: true,
          costCenter: true,
          createdAt: true,
          creation: true,
          description: true,
          docstatus: true,
          expenseAccount: true,
          hasItemScanned: true,
          id: true,
          idx: true,
          image: true,
          isFinishedItem: true,
          isScrapItem: true,
          itemCode: true,
          itemGroup: true,
          itemName: true,
          jobCardItem: true,
          materialRequest: true,
          materialRequestItem: true,
          modified: true,
          modifiedBy: true,
          name: true,
          originalItem: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          poDetail: true,
          project: true,
          putawayRule: true,
          qty: true,
          qualityInspection: true,
          referencePurchaseReceipt: true,
          retainSample: true,
          sWarehouse: true,
          sampleQuantity: true,
          scoRmDetail: true,
          serialAndBatchBundle: true,
          serialNo: true,
          setBasicRateManually: true,
          steDetail: true,
          stockUom: true,
          subcontractedItem: true,
          tWarehouse: true,
          transferQty: true,
          transferredQty: true,
          uom: true,
          updatedAt: true,
          useSerialBatchFields: true,
          valuationRate: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: StockEntryDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStockEntryDetail(
    @common.Param() params: StockEntryDetailWhereUniqueInput
  ): Promise<StockEntryDetail | null> {
    try {
      return await this.service.deleteStockEntryDetail({
        where: params,
        select: {
          actualQty: true,
          additionalCost: true,
          againstStockEntry: true,
          allowAlternativeItem: true,
          allowZeroValuationRate: true,
          amount: true,
          barcode: true,
          basicAmount: true,
          basicRate: true,
          batchNo: true,
          bomNo: true,
          conversionFactor: true,
          costCenter: true,
          createdAt: true,
          creation: true,
          description: true,
          docstatus: true,
          expenseAccount: true,
          hasItemScanned: true,
          id: true,
          idx: true,
          image: true,
          isFinishedItem: true,
          isScrapItem: true,
          itemCode: true,
          itemGroup: true,
          itemName: true,
          jobCardItem: true,
          materialRequest: true,
          materialRequestItem: true,
          modified: true,
          modifiedBy: true,
          name: true,
          originalItem: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          poDetail: true,
          project: true,
          putawayRule: true,
          qty: true,
          qualityInspection: true,
          referencePurchaseReceipt: true,
          retainSample: true,
          sWarehouse: true,
          sampleQuantity: true,
          scoRmDetail: true,
          serialAndBatchBundle: true,
          serialNo: true,
          setBasicRateManually: true,
          steDetail: true,
          stockUom: true,
          subcontractedItem: true,
          tWarehouse: true,
          transferQty: true,
          transferredQty: true,
          uom: true,
          updatedAt: true,
          useSerialBatchFields: true,
          valuationRate: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
