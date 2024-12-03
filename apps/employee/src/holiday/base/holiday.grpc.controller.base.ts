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
import { GrpcMethod } from "@nestjs/microservices";
import { HolidayService } from "../holiday.service";
import { HolidayCreateInput } from "./HolidayCreateInput";
import { HolidayWhereInput } from "./HolidayWhereInput";
import { HolidayWhereUniqueInput } from "./HolidayWhereUniqueInput";
import { HolidayFindManyArgs } from "./HolidayFindManyArgs";
import { HolidayUpdateInput } from "./HolidayUpdateInput";
import { Holiday } from "./Holiday";

export class HolidayGrpcControllerBase {
  constructor(protected readonly service: HolidayService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Holiday })
  @GrpcMethod("HolidayService", "createHoliday")
  async createHoliday(
    @common.Body() data: HolidayCreateInput
  ): Promise<Holiday> {
    return await this.service.createHoliday({
      data: data,
      select: {
        createdAt: true,
        creation: true,
        description: true,
        docstatus: true,
        holidayDate: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentField: true,
        parentType: true,
        updatedAt: true,
        weeklyOff: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Holiday] })
  @ApiNestedQuery(HolidayFindManyArgs)
  @GrpcMethod("HolidayService", "holidays")
  async holidays(@common.Req() request: Request): Promise<Holiday[]> {
    const args = plainToClass(HolidayFindManyArgs, request.query);
    return this.service.holidays({
      ...args,
      select: {
        createdAt: true,
        creation: true,
        description: true,
        docstatus: true,
        holidayDate: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentField: true,
        parentType: true,
        updatedAt: true,
        weeklyOff: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Holiday })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("HolidayService", "holiday")
  async holiday(
    @common.Param() params: HolidayWhereUniqueInput
  ): Promise<Holiday | null> {
    const result = await this.service.holiday({
      where: params,
      select: {
        createdAt: true,
        creation: true,
        description: true,
        docstatus: true,
        holidayDate: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentField: true,
        parentType: true,
        updatedAt: true,
        weeklyOff: true,
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
  @swagger.ApiOkResponse({ type: Holiday })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("HolidayService", "updateHoliday")
  async updateHoliday(
    @common.Param() params: HolidayWhereUniqueInput,
    @common.Body() data: HolidayUpdateInput
  ): Promise<Holiday | null> {
    try {
      return await this.service.updateHoliday({
        where: params,
        data: data,
        select: {
          createdAt: true,
          creation: true,
          description: true,
          docstatus: true,
          holidayDate: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentField: true,
          parentType: true,
          updatedAt: true,
          weeklyOff: true,
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
  @swagger.ApiOkResponse({ type: Holiday })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("HolidayService", "deleteHoliday")
  async deleteHoliday(
    @common.Param() params: HolidayWhereUniqueInput
  ): Promise<Holiday | null> {
    try {
      return await this.service.deleteHoliday({
        where: params,
        select: {
          createdAt: true,
          creation: true,
          description: true,
          docstatus: true,
          holidayDate: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentField: true,
          parentType: true,
          updatedAt: true,
          weeklyOff: true,
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
