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
import { WarehouseService } from "../warehouse.service";
import { WarehouseCreateInput } from "./WarehouseCreateInput";
import { WarehouseWhereInput } from "./WarehouseWhereInput";
import { WarehouseWhereUniqueInput } from "./WarehouseWhereUniqueInput";
import { WarehouseFindManyArgs } from "./WarehouseFindManyArgs";
import { WarehouseUpdateInput } from "./WarehouseUpdateInput";
import { Warehouse } from "./Warehouse";

export class WarehouseGrpcControllerBase {
  constructor(protected readonly service: WarehouseService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Warehouse })
  @GrpcMethod("WarehouseService", "createWarehouse")
  async createWarehouse(
    @common.Body() data: WarehouseCreateInput
  ): Promise<Warehouse> {
    return await this.service.createWarehouse({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Warehouse] })
  @ApiNestedQuery(WarehouseFindManyArgs)
  @GrpcMethod("WarehouseService", "warehouses")
  async warehouses(@common.Req() request: Request): Promise<Warehouse[]> {
    const args = plainToClass(WarehouseFindManyArgs, request.query);
    return this.service.warehouses({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Warehouse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("WarehouseService", "warehouse")
  async warehouse(
    @common.Param() params: WarehouseWhereUniqueInput
  ): Promise<Warehouse | null> {
    const result = await this.service.warehouse({
      where: params,
      select: {
        createdAt: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: Warehouse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("WarehouseService", "updateWarehouse")
  async updateWarehouse(
    @common.Param() params: WarehouseWhereUniqueInput,
    @common.Body() data: WarehouseUpdateInput
  ): Promise<Warehouse | null> {
    try {
      return await this.service.updateWarehouse({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: Warehouse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("WarehouseService", "deleteWarehouse")
  async deleteWarehouse(
    @common.Param() params: WarehouseWhereUniqueInput
  ): Promise<Warehouse | null> {
    try {
      return await this.service.deleteWarehouse({
        where: params,
        select: {
          createdAt: true,
          id: true,
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
