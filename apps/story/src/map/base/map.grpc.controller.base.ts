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
import { MapService } from "../map.service";
import { MapCreateInput } from "./MapCreateInput";
import { MapWhereInput } from "./MapWhereInput";
import { MapWhereUniqueInput } from "./MapWhereUniqueInput";
import { MapFindManyArgs } from "./MapFindManyArgs";
import { MapUpdateInput } from "./MapUpdateInput";
import { Map } from "./Map";
import { ZoneFindManyArgs } from "../../zone/base/ZoneFindManyArgs";
import { Zone } from "../../zone/base/Zone";
import { ZoneWhereUniqueInput } from "../../zone/base/ZoneWhereUniqueInput";

export class MapGrpcControllerBase {
  constructor(protected readonly service: MapService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Map })
  @GrpcMethod("MapService", "createMap")
  async createMap(@common.Body() data: MapCreateInput): Promise<Map> {
    return await this.service.createMap({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Map] })
  @ApiNestedQuery(MapFindManyArgs)
  @GrpcMethod("MapService", "maps")
  async maps(@common.Req() request: Request): Promise<Map[]> {
    const args = plainToClass(MapFindManyArgs, request.query);
    return this.service.maps({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Map })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("MapService", "map")
  async map(@common.Param() params: MapWhereUniqueInput): Promise<Map | null> {
    const result = await this.service.map({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
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
  @swagger.ApiOkResponse({ type: Map })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("MapService", "updateMap")
  async updateMap(
    @common.Param() params: MapWhereUniqueInput,
    @common.Body() data: MapUpdateInput
  ): Promise<Map | null> {
    try {
      return await this.service.updateMap({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
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
  @swagger.ApiOkResponse({ type: Map })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("MapService", "deleteMap")
  async deleteMap(
    @common.Param() params: MapWhereUniqueInput
  ): Promise<Map | null> {
    try {
      return await this.service.deleteMap({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
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

  @common.Get("/:id/zones")
  @ApiNestedQuery(ZoneFindManyArgs)
  @GrpcMethod("MapService", "findManyZones")
  async findManyZones(
    @common.Req() request: Request,
    @common.Param() params: MapWhereUniqueInput
  ): Promise<Zone[]> {
    const query = plainToClass(ZoneFindManyArgs, request.query);
    const results = await this.service.findZones(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        map: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/zones")
  @GrpcMethod("MapService", "connectZones")
  async connectZones(
    @common.Param() params: MapWhereUniqueInput,
    @common.Body() body: ZoneWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      zones: {
        connect: body,
      },
    };
    await this.service.updateMap({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/zones")
  @GrpcMethod("MapService", "updateZones")
  async updateZones(
    @common.Param() params: MapWhereUniqueInput,
    @common.Body() body: ZoneWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      zones: {
        set: body,
      },
    };
    await this.service.updateMap({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/zones")
  @GrpcMethod("MapService", "disconnectZones")
  async disconnectZones(
    @common.Param() params: MapWhereUniqueInput,
    @common.Body() body: ZoneWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      zones: {
        disconnect: body,
      },
    };
    await this.service.updateMap({
      where: params,
      data,
      select: { id: true },
    });
  }
}
