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
import { ShipmentDeliveryNoteService } from "../shipmentDeliveryNote.service";
import { ShipmentDeliveryNoteCreateInput } from "./ShipmentDeliveryNoteCreateInput";
import { ShipmentDeliveryNote } from "./ShipmentDeliveryNote";
import { ShipmentDeliveryNoteFindManyArgs } from "./ShipmentDeliveryNoteFindManyArgs";
import { ShipmentDeliveryNoteWhereUniqueInput } from "./ShipmentDeliveryNoteWhereUniqueInput";
import { ShipmentDeliveryNoteUpdateInput } from "./ShipmentDeliveryNoteUpdateInput";

export class ShipmentDeliveryNoteControllerBase {
  constructor(protected readonly service: ShipmentDeliveryNoteService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ShipmentDeliveryNote })
  @swagger.ApiBody({
    type: ShipmentDeliveryNoteCreateInput,
  })
  async createShipmentDeliveryNote(
    @common.Body() data: ShipmentDeliveryNoteCreateInput
  ): Promise<ShipmentDeliveryNote> {
    return await this.service.createShipmentDeliveryNote({
      data: data,
      select: {
        createdAt: true,
        creation: true,
        deliveryNote: true,
        docstatus: true,
        grandTotal: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ShipmentDeliveryNote] })
  @ApiNestedQuery(ShipmentDeliveryNoteFindManyArgs)
  async shipmentDeliveryNotes(
    @common.Req() request: Request
  ): Promise<ShipmentDeliveryNote[]> {
    const args = plainToClass(ShipmentDeliveryNoteFindManyArgs, request.query);
    return this.service.shipmentDeliveryNotes({
      ...args,
      select: {
        createdAt: true,
        creation: true,
        deliveryNote: true,
        docstatus: true,
        grandTotal: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ShipmentDeliveryNote })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async shipmentDeliveryNote(
    @common.Param() params: ShipmentDeliveryNoteWhereUniqueInput
  ): Promise<ShipmentDeliveryNote | null> {
    const result = await this.service.shipmentDeliveryNote({
      where: params,
      select: {
        createdAt: true,
        creation: true,
        deliveryNote: true,
        docstatus: true,
        grandTotal: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
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
  @swagger.ApiOkResponse({ type: ShipmentDeliveryNote })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: ShipmentDeliveryNoteUpdateInput,
  })
  async updateShipmentDeliveryNote(
    @common.Param() params: ShipmentDeliveryNoteWhereUniqueInput,
    @common.Body() data: ShipmentDeliveryNoteUpdateInput
  ): Promise<ShipmentDeliveryNote | null> {
    try {
      return await this.service.updateShipmentDeliveryNote({
        where: params,
        data: data,
        select: {
          createdAt: true,
          creation: true,
          deliveryNote: true,
          docstatus: true,
          grandTotal: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
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
  @swagger.ApiOkResponse({ type: ShipmentDeliveryNote })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteShipmentDeliveryNote(
    @common.Param() params: ShipmentDeliveryNoteWhereUniqueInput
  ): Promise<ShipmentDeliveryNote | null> {
    try {
      return await this.service.deleteShipmentDeliveryNote({
        where: params,
        select: {
          createdAt: true,
          creation: true,
          deliveryNote: true,
          docstatus: true,
          grandTotal: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
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