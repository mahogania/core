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
import { AssetMaintenanceLogService } from "../assetMaintenanceLog.service";
import { AssetMaintenanceLogCreateInput } from "./AssetMaintenanceLogCreateInput";
import { AssetMaintenanceLog } from "./AssetMaintenanceLog";
import { AssetMaintenanceLogFindManyArgs } from "./AssetMaintenanceLogFindManyArgs";
import { AssetMaintenanceLogWhereUniqueInput } from "./AssetMaintenanceLogWhereUniqueInput";
import { AssetMaintenanceLogUpdateInput } from "./AssetMaintenanceLogUpdateInput";

export class AssetMaintenanceLogControllerBase {
  constructor(protected readonly service: AssetMaintenanceLogService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AssetMaintenanceLog })
  async createAssetMaintenanceLog(
    @common.Body() data: AssetMaintenanceLogCreateInput
  ): Promise<AssetMaintenanceLog> {
    return await this.service.createAssetMaintenanceLog({
      data: data,
      select: {
        actionsPerformed: true,
        amendedFrom: true,
        assetMaintenance: true,
        assetName: true,
        assignToName: true,
        certificateAttachement: true,
        completionDate: true,
        createdAt: true,
        creation: true,
        description: true,
        docstatus: true,
        dueDate: true,
        hasCertificate: true,
        id: true,
        idx: true,
        itemCode: true,
        itemName: true,
        maintenanceStatus: true,
        maintenanceType: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namingSeries: true,
        owner: true,
        periodicity: true,
        task: true,
        taskName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AssetMaintenanceLog] })
  @ApiNestedQuery(AssetMaintenanceLogFindManyArgs)
  async assetMaintenanceLogs(
    @common.Req() request: Request
  ): Promise<AssetMaintenanceLog[]> {
    const args = plainToClass(AssetMaintenanceLogFindManyArgs, request.query);
    return this.service.assetMaintenanceLogs({
      ...args,
      select: {
        actionsPerformed: true,
        amendedFrom: true,
        assetMaintenance: true,
        assetName: true,
        assignToName: true,
        certificateAttachement: true,
        completionDate: true,
        createdAt: true,
        creation: true,
        description: true,
        docstatus: true,
        dueDate: true,
        hasCertificate: true,
        id: true,
        idx: true,
        itemCode: true,
        itemName: true,
        maintenanceStatus: true,
        maintenanceType: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namingSeries: true,
        owner: true,
        periodicity: true,
        task: true,
        taskName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AssetMaintenanceLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async assetMaintenanceLog(
    @common.Param() params: AssetMaintenanceLogWhereUniqueInput
  ): Promise<AssetMaintenanceLog | null> {
    const result = await this.service.assetMaintenanceLog({
      where: params,
      select: {
        actionsPerformed: true,
        amendedFrom: true,
        assetMaintenance: true,
        assetName: true,
        assignToName: true,
        certificateAttachement: true,
        completionDate: true,
        createdAt: true,
        creation: true,
        description: true,
        docstatus: true,
        dueDate: true,
        hasCertificate: true,
        id: true,
        idx: true,
        itemCode: true,
        itemName: true,
        maintenanceStatus: true,
        maintenanceType: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namingSeries: true,
        owner: true,
        periodicity: true,
        task: true,
        taskName: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: AssetMaintenanceLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAssetMaintenanceLog(
    @common.Param() params: AssetMaintenanceLogWhereUniqueInput,
    @common.Body() data: AssetMaintenanceLogUpdateInput
  ): Promise<AssetMaintenanceLog | null> {
    try {
      return await this.service.updateAssetMaintenanceLog({
        where: params,
        data: data,
        select: {
          actionsPerformed: true,
          amendedFrom: true,
          assetMaintenance: true,
          assetName: true,
          assignToName: true,
          certificateAttachement: true,
          completionDate: true,
          createdAt: true,
          creation: true,
          description: true,
          docstatus: true,
          dueDate: true,
          hasCertificate: true,
          id: true,
          idx: true,
          itemCode: true,
          itemName: true,
          maintenanceStatus: true,
          maintenanceType: true,
          modified: true,
          modifiedBy: true,
          name: true,
          namingSeries: true,
          owner: true,
          periodicity: true,
          task: true,
          taskName: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: AssetMaintenanceLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAssetMaintenanceLog(
    @common.Param() params: AssetMaintenanceLogWhereUniqueInput
  ): Promise<AssetMaintenanceLog | null> {
    try {
      return await this.service.deleteAssetMaintenanceLog({
        where: params,
        select: {
          actionsPerformed: true,
          amendedFrom: true,
          assetMaintenance: true,
          assetName: true,
          assignToName: true,
          certificateAttachement: true,
          completionDate: true,
          createdAt: true,
          creation: true,
          description: true,
          docstatus: true,
          dueDate: true,
          hasCertificate: true,
          id: true,
          idx: true,
          itemCode: true,
          itemName: true,
          maintenanceStatus: true,
          maintenanceType: true,
          modified: true,
          modifiedBy: true,
          name: true,
          namingSeries: true,
          owner: true,
          periodicity: true,
          task: true,
          taskName: true,
          updatedAt: true,
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