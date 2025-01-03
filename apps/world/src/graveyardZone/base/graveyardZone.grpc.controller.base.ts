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
import { GraveyardZoneService } from "../graveyardZone.service";
import { GraveyardZoneCreateInput } from "./GraveyardZoneCreateInput";
import { GraveyardZoneWhereInput } from "./GraveyardZoneWhereInput";
import { GraveyardZoneWhereUniqueInput } from "./GraveyardZoneWhereUniqueInput";
import { GraveyardZoneFindManyArgs } from "./GraveyardZoneFindManyArgs";
import { GraveyardZoneUpdateInput } from "./GraveyardZoneUpdateInput";
import { GraveyardZone } from "./GraveyardZone";

export class GraveyardZoneGrpcControllerBase {
  constructor(protected readonly service: GraveyardZoneService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GraveyardZone })
  @GrpcMethod("GraveyardZoneService", "createGraveyardZone")
  async createGraveyardZone(
    @common.Body() data: GraveyardZoneCreateInput
  ): Promise<GraveyardZone> {
    return await this.service.createGraveyardZone({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [GraveyardZone] })
  @ApiNestedQuery(GraveyardZoneFindManyArgs)
  @GrpcMethod("GraveyardZoneService", "graveyardZones")
  async graveyardZones(
    @common.Req() request: Request
  ): Promise<GraveyardZone[]> {
    const args = plainToClass(GraveyardZoneFindManyArgs, request.query);
    return this.service.graveyardZones({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GraveyardZone })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("GraveyardZoneService", "graveyardZone")
  async graveyardZone(
    @common.Param() params: GraveyardZoneWhereUniqueInput
  ): Promise<GraveyardZone | null> {
    const result = await this.service.graveyardZone({
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
  @swagger.ApiOkResponse({ type: GraveyardZone })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("GraveyardZoneService", "updateGraveyardZone")
  async updateGraveyardZone(
    @common.Param() params: GraveyardZoneWhereUniqueInput,
    @common.Body() data: GraveyardZoneUpdateInput
  ): Promise<GraveyardZone | null> {
    try {
      return await this.service.updateGraveyardZone({
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
  @swagger.ApiOkResponse({ type: GraveyardZone })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("GraveyardZoneService", "deleteGraveyardZone")
  async deleteGraveyardZone(
    @common.Param() params: GraveyardZoneWhereUniqueInput
  ): Promise<GraveyardZone | null> {
    try {
      return await this.service.deleteGraveyardZone({
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
