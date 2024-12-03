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
import { ShipmentParcelService } from "../shipmentParcel.service";
import { ShipmentParcelCreateInput } from "./ShipmentParcelCreateInput";
import { ShipmentParcelWhereInput } from "./ShipmentParcelWhereInput";
import { ShipmentParcelWhereUniqueInput } from "./ShipmentParcelWhereUniqueInput";
import { ShipmentParcelFindManyArgs } from "./ShipmentParcelFindManyArgs";
import { ShipmentParcelUpdateInput } from "./ShipmentParcelUpdateInput";
import { ShipmentParcel } from "./ShipmentParcel";

export class ShipmentParcelGrpcControllerBase {
  constructor(protected readonly service: ShipmentParcelService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ShipmentParcel })
  @GrpcMethod("ShipmentParcelService", "createShipmentParcel")
  async createShipmentParcel(
    @common.Body() data: ShipmentParcelCreateInput
  ): Promise<ShipmentParcel> {
    return await this.service.createShipmentParcel({
      data: data,
      select: {
        count: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        height: true,
        id: true,
        idx: true,
        length: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        updatedAt: true,
        weight: true,
        width: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ShipmentParcel] })
  @ApiNestedQuery(ShipmentParcelFindManyArgs)
  @GrpcMethod("ShipmentParcelService", "shipmentParcels")
  async shipmentParcels(
    @common.Req() request: Request
  ): Promise<ShipmentParcel[]> {
    const args = plainToClass(ShipmentParcelFindManyArgs, request.query);
    return this.service.shipmentParcels({
      ...args,
      select: {
        count: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        height: true,
        id: true,
        idx: true,
        length: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        updatedAt: true,
        weight: true,
        width: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ShipmentParcel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ShipmentParcelService", "shipmentParcel")
  async shipmentParcel(
    @common.Param() params: ShipmentParcelWhereUniqueInput
  ): Promise<ShipmentParcel | null> {
    const result = await this.service.shipmentParcel({
      where: params,
      select: {
        count: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        height: true,
        id: true,
        idx: true,
        length: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        updatedAt: true,
        weight: true,
        width: true,
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
  @swagger.ApiOkResponse({ type: ShipmentParcel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ShipmentParcelService", "updateShipmentParcel")
  async updateShipmentParcel(
    @common.Param() params: ShipmentParcelWhereUniqueInput,
    @common.Body() data: ShipmentParcelUpdateInput
  ): Promise<ShipmentParcel | null> {
    try {
      return await this.service.updateShipmentParcel({
        where: params,
        data: data,
        select: {
          count: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          height: true,
          id: true,
          idx: true,
          length: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          updatedAt: true,
          weight: true,
          width: true,
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
  @swagger.ApiOkResponse({ type: ShipmentParcel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ShipmentParcelService", "deleteShipmentParcel")
  async deleteShipmentParcel(
    @common.Param() params: ShipmentParcelWhereUniqueInput
  ): Promise<ShipmentParcel | null> {
    try {
      return await this.service.deleteShipmentParcel({
        where: params,
        select: {
          count: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          height: true,
          id: true,
          idx: true,
          length: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          updatedAt: true,
          weight: true,
          width: true,
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
