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
import { MaintenanceScheduleService } from "../maintenanceSchedule.service";
import { MaintenanceScheduleCreateInput } from "./MaintenanceScheduleCreateInput";
import { MaintenanceSchedule } from "./MaintenanceSchedule";
import { MaintenanceScheduleFindManyArgs } from "./MaintenanceScheduleFindManyArgs";
import { MaintenanceScheduleWhereUniqueInput } from "./MaintenanceScheduleWhereUniqueInput";
import { MaintenanceScheduleUpdateInput } from "./MaintenanceScheduleUpdateInput";

export class MaintenanceScheduleControllerBase {
  constructor(protected readonly service: MaintenanceScheduleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MaintenanceSchedule })
  async createMaintenanceSchedule(
    @common.Body() data: MaintenanceScheduleCreateInput
  ): Promise<MaintenanceSchedule> {
    return await this.service.createMaintenanceSchedule({
      data: data,
      select: {
        addressDisplay: true,
        amendedFrom: true,
        company: true,
        contactDisplay: true,
        contactEmail: true,
        contactMobile: true,
        contactPerson: true,
        createdAt: true,
        creation: true,
        customer: true,
        customerAddress: true,
        customerGroup: true,
        customerName: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namingSeries: true,
        owner: true,
        status: true,
        territory: true,
        transactionDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [MaintenanceSchedule] })
  @ApiNestedQuery(MaintenanceScheduleFindManyArgs)
  async maintenanceSchedules(
    @common.Req() request: Request
  ): Promise<MaintenanceSchedule[]> {
    const args = plainToClass(MaintenanceScheduleFindManyArgs, request.query);
    return this.service.maintenanceSchedules({
      ...args,
      select: {
        addressDisplay: true,
        amendedFrom: true,
        company: true,
        contactDisplay: true,
        contactEmail: true,
        contactMobile: true,
        contactPerson: true,
        createdAt: true,
        creation: true,
        customer: true,
        customerAddress: true,
        customerGroup: true,
        customerName: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namingSeries: true,
        owner: true,
        status: true,
        territory: true,
        transactionDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MaintenanceSchedule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async maintenanceSchedule(
    @common.Param() params: MaintenanceScheduleWhereUniqueInput
  ): Promise<MaintenanceSchedule | null> {
    const result = await this.service.maintenanceSchedule({
      where: params,
      select: {
        addressDisplay: true,
        amendedFrom: true,
        company: true,
        contactDisplay: true,
        contactEmail: true,
        contactMobile: true,
        contactPerson: true,
        createdAt: true,
        creation: true,
        customer: true,
        customerAddress: true,
        customerGroup: true,
        customerName: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        namingSeries: true,
        owner: true,
        status: true,
        territory: true,
        transactionDate: true,
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
  @swagger.ApiOkResponse({ type: MaintenanceSchedule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMaintenanceSchedule(
    @common.Param() params: MaintenanceScheduleWhereUniqueInput,
    @common.Body() data: MaintenanceScheduleUpdateInput
  ): Promise<MaintenanceSchedule | null> {
    try {
      return await this.service.updateMaintenanceSchedule({
        where: params,
        data: data,
        select: {
          addressDisplay: true,
          amendedFrom: true,
          company: true,
          contactDisplay: true,
          contactEmail: true,
          contactMobile: true,
          contactPerson: true,
          createdAt: true,
          creation: true,
          customer: true,
          customerAddress: true,
          customerGroup: true,
          customerName: true,
          docstatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          namingSeries: true,
          owner: true,
          status: true,
          territory: true,
          transactionDate: true,
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
  @swagger.ApiOkResponse({ type: MaintenanceSchedule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMaintenanceSchedule(
    @common.Param() params: MaintenanceScheduleWhereUniqueInput
  ): Promise<MaintenanceSchedule | null> {
    try {
      return await this.service.deleteMaintenanceSchedule({
        where: params,
        select: {
          addressDisplay: true,
          amendedFrom: true,
          company: true,
          contactDisplay: true,
          contactEmail: true,
          contactMobile: true,
          contactPerson: true,
          createdAt: true,
          creation: true,
          customer: true,
          customerAddress: true,
          customerGroup: true,
          customerName: true,
          docstatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          namingSeries: true,
          owner: true,
          status: true,
          territory: true,
          transactionDate: true,
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
