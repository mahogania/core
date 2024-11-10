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
import { WorldService } from "../world.service";
import { WorldCreateInput } from "./WorldCreateInput";
import { WorldWhereInput } from "./WorldWhereInput";
import { WorldWhereUniqueInput } from "./WorldWhereUniqueInput";
import { WorldFindManyArgs } from "./WorldFindManyArgs";
import { WorldUpdateInput } from "./WorldUpdateInput";
import { World } from "./World";
import { RealmFindManyArgs } from "../../realm/base/RealmFindManyArgs";
import { Realm } from "../../realm/base/Realm";
import { RealmWhereUniqueInput } from "../../realm/base/RealmWhereUniqueInput";

export class WorldGrpcControllerBase {
  constructor(protected readonly service: WorldService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: World })
  @GrpcMethod("WorldService", "createWorld")
  async createWorld(@common.Body() data: WorldCreateInput): Promise<World> {
    return await this.service.createWorld({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [World] })
  @ApiNestedQuery(WorldFindManyArgs)
  @GrpcMethod("WorldService", "worlds")
  async worlds(@common.Req() request: Request): Promise<World[]> {
    const args = plainToClass(WorldFindManyArgs, request.query);
    return this.service.worlds({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: World })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("WorldService", "world")
  async world(
    @common.Param() params: WorldWhereUniqueInput
  ): Promise<World | null> {
    const result = await this.service.world({
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
  @swagger.ApiOkResponse({ type: World })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("WorldService", "updateWorld")
  async updateWorld(
    @common.Param() params: WorldWhereUniqueInput,
    @common.Body() data: WorldUpdateInput
  ): Promise<World | null> {
    try {
      return await this.service.updateWorld({
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
  @swagger.ApiOkResponse({ type: World })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("WorldService", "deleteWorld")
  async deleteWorld(
    @common.Param() params: WorldWhereUniqueInput
  ): Promise<World | null> {
    try {
      return await this.service.deleteWorld({
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

  @common.Get("/:id/realms")
  @ApiNestedQuery(RealmFindManyArgs)
  @GrpcMethod("WorldService", "findManyRealms")
  async findManyRealms(
    @common.Req() request: Request,
    @common.Param() params: WorldWhereUniqueInput
  ): Promise<Realm[]> {
    const query = plainToClass(RealmFindManyArgs, request.query);
    const results = await this.service.findRealms(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,

        world: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/realms")
  @GrpcMethod("WorldService", "connectRealms")
  async connectRealms(
    @common.Param() params: WorldWhereUniqueInput,
    @common.Body() body: RealmWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      realms: {
        connect: body,
      },
    };
    await this.service.updateWorld({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/realms")
  @GrpcMethod("WorldService", "updateRealms")
  async updateRealms(
    @common.Param() params: WorldWhereUniqueInput,
    @common.Body() body: RealmWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      realms: {
        set: body,
      },
    };
    await this.service.updateWorld({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/realms")
  @GrpcMethod("WorldService", "disconnectRealms")
  async disconnectRealms(
    @common.Param() params: WorldWhereUniqueInput,
    @common.Body() body: RealmWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      realms: {
        disconnect: body,
      },
    };
    await this.service.updateWorld({
      where: params,
      data,
      select: { id: true },
    });
  }
}
