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
import { MaintenanceScheduleItemService } from "../maintenanceScheduleItem.service";
import { MaintenanceScheduleItemCreateInput } from "./MaintenanceScheduleItemCreateInput";
import { MaintenanceScheduleItem } from "./MaintenanceScheduleItem";
import { MaintenanceScheduleItemFindManyArgs } from "./MaintenanceScheduleItemFindManyArgs";
import { MaintenanceScheduleItemWhereUniqueInput } from "./MaintenanceScheduleItemWhereUniqueInput";
import { MaintenanceScheduleItemUpdateInput } from "./MaintenanceScheduleItemUpdateInput";

export class MaintenanceScheduleItemControllerBase {
  constructor(protected readonly service: MaintenanceScheduleItemService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MaintenanceScheduleItem })
  async createMaintenanceScheduleItem(
    @common.Body() data: MaintenanceScheduleItemCreateInput
  ): Promise<MaintenanceScheduleItem> {
    return await this.service.createMaintenanceScheduleItem({
      data: data,
      select: {
        createdAt: true,
        creation: true,
        description: true,
        docstatus: true,
        endDate: true,
        id: true,
        idx: true,
        itemCode: true,
        itemName: true,
        modified: true,
        modifiedBy: true,
        name: true,
        noOfVisits: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        periodicity: true,
        salesOrder: true,
        salesPerson: true,
        serialAndBatchBundle: true,
        serialNo: true,
        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [MaintenanceScheduleItem] })
  @ApiNestedQuery(MaintenanceScheduleItemFindManyArgs)
  async maintenanceScheduleItems(
    @common.Req() request: Request
  ): Promise<MaintenanceScheduleItem[]> {
    const args = plainToClass(
      MaintenanceScheduleItemFindManyArgs,
      request.query
    );
    return this.service.maintenanceScheduleItems({
      ...args,
      select: {
        createdAt: true,
        creation: true,
        description: true,
        docstatus: true,
        endDate: true,
        id: true,
        idx: true,
        itemCode: true,
        itemName: true,
        modified: true,
        modifiedBy: true,
        name: true,
        noOfVisits: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        periodicity: true,
        salesOrder: true,
        salesPerson: true,
        serialAndBatchBundle: true,
        serialNo: true,
        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MaintenanceScheduleItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async maintenanceScheduleItem(
    @common.Param() params: MaintenanceScheduleItemWhereUniqueInput
  ): Promise<MaintenanceScheduleItem | null> {
    const result = await this.service.maintenanceScheduleItem({
      where: params,
      select: {
        createdAt: true,
        creation: true,
        description: true,
        docstatus: true,
        endDate: true,
        id: true,
        idx: true,
        itemCode: true,
        itemName: true,
        modified: true,
        modifiedBy: true,
        name: true,
        noOfVisits: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        periodicity: true,
        salesOrder: true,
        salesPerson: true,
        serialAndBatchBundle: true,
        serialNo: true,
        startDate: true,
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
  @swagger.ApiOkResponse({ type: MaintenanceScheduleItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMaintenanceScheduleItem(
    @common.Param() params: MaintenanceScheduleItemWhereUniqueInput,
    @common.Body() data: MaintenanceScheduleItemUpdateInput
  ): Promise<MaintenanceScheduleItem | null> {
    try {
      return await this.service.updateMaintenanceScheduleItem({
        where: params,
        data: data,
        select: {
          createdAt: true,
          creation: true,
          description: true,
          docstatus: true,
          endDate: true,
          id: true,
          idx: true,
          itemCode: true,
          itemName: true,
          modified: true,
          modifiedBy: true,
          name: true,
          noOfVisits: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          periodicity: true,
          salesOrder: true,
          salesPerson: true,
          serialAndBatchBundle: true,
          serialNo: true,
          startDate: true,
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
  @swagger.ApiOkResponse({ type: MaintenanceScheduleItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMaintenanceScheduleItem(
    @common.Param() params: MaintenanceScheduleItemWhereUniqueInput
  ): Promise<MaintenanceScheduleItem | null> {
    try {
      return await this.service.deleteMaintenanceScheduleItem({
        where: params,
        select: {
          createdAt: true,
          creation: true,
          description: true,
          docstatus: true,
          endDate: true,
          id: true,
          idx: true,
          itemCode: true,
          itemName: true,
          modified: true,
          modifiedBy: true,
          name: true,
          noOfVisits: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          periodicity: true,
          salesOrder: true,
          salesPerson: true,
          serialAndBatchBundle: true,
          serialNo: true,
          startDate: true,
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