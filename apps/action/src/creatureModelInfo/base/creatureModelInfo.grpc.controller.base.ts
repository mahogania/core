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
import { CreatureModelInfoService } from "../creatureModelInfo.service";
import { CreatureModelInfoCreateInput } from "./CreatureModelInfoCreateInput";
import { CreatureModelInfoWhereInput } from "./CreatureModelInfoWhereInput";
import { CreatureModelInfoWhereUniqueInput } from "./CreatureModelInfoWhereUniqueInput";
import { CreatureModelInfoFindManyArgs } from "./CreatureModelInfoFindManyArgs";
import { CreatureModelInfoUpdateInput } from "./CreatureModelInfoUpdateInput";
import { CreatureModelInfo } from "./CreatureModelInfo";
import { CreatureFindManyArgs } from "../../creature/base/CreatureFindManyArgs";
import { Creature } from "../../creature/base/Creature";
import { CreatureWhereUniqueInput } from "../../creature/base/CreatureWhereUniqueInput";

export class CreatureModelInfoGrpcControllerBase {
  constructor(protected readonly service: CreatureModelInfoService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CreatureModelInfo })
  @GrpcMethod("CreatureModelInfoService", "createCreatureModelInfo")
  async createCreatureModelInfo(
    @common.Body() data: CreatureModelInfoCreateInput
  ): Promise<CreatureModelInfo> {
    return await this.service.createCreatureModelInfo({
      data: data,
      select: {
        boundRadius: true,
        combatRadius: true,
        createdAt: true,
        displayId: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CreatureModelInfo] })
  @ApiNestedQuery(CreatureModelInfoFindManyArgs)
  @GrpcMethod("CreatureModelInfoService", "creatureModelInfos")
  async creatureModelInfos(
    @common.Req() request: Request
  ): Promise<CreatureModelInfo[]> {
    const args = plainToClass(CreatureModelInfoFindManyArgs, request.query);
    return this.service.creatureModelInfos({
      ...args,
      select: {
        boundRadius: true,
        combatRadius: true,
        createdAt: true,
        displayId: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CreatureModelInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CreatureModelInfoService", "creatureModelInfo")
  async creatureModelInfo(
    @common.Param() params: CreatureModelInfoWhereUniqueInput
  ): Promise<CreatureModelInfo | null> {
    const result = await this.service.creatureModelInfo({
      where: params,
      select: {
        boundRadius: true,
        combatRadius: true,
        createdAt: true,
        displayId: true,
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
  @swagger.ApiOkResponse({ type: CreatureModelInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CreatureModelInfoService", "updateCreatureModelInfo")
  async updateCreatureModelInfo(
    @common.Param() params: CreatureModelInfoWhereUniqueInput,
    @common.Body() data: CreatureModelInfoUpdateInput
  ): Promise<CreatureModelInfo | null> {
    try {
      return await this.service.updateCreatureModelInfo({
        where: params,
        data: data,
        select: {
          boundRadius: true,
          combatRadius: true,
          createdAt: true,
          displayId: true,
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
  @swagger.ApiOkResponse({ type: CreatureModelInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CreatureModelInfoService", "deleteCreatureModelInfo")
  async deleteCreatureModelInfo(
    @common.Param() params: CreatureModelInfoWhereUniqueInput
  ): Promise<CreatureModelInfo | null> {
    try {
      return await this.service.deleteCreatureModelInfo({
        where: params,
        select: {
          boundRadius: true,
          combatRadius: true,
          createdAt: true,
          displayId: true,
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

  @common.Get("/:id/creatures")
  @ApiNestedQuery(CreatureFindManyArgs)
  @GrpcMethod("CreatureModelInfoService", "findManyCreatures")
  async findManyCreatures(
    @common.Req() request: Request,
    @common.Param() params: CreatureModelInfoWhereUniqueInput
  ): Promise<Creature[]> {
    const query = plainToClass(CreatureFindManyArgs, request.query);
    const results = await this.service.findCreatures(params.id, {
      ...query,
      select: {
        areaId: true,
        behaviourName: true,
        createdAt: true,

        creatureEquipments: {
          select: {
            id: true,
          },
        },

        creatureFormations: {
          select: {
            id: true,
          },
        },

        creatureImmunities: {
          select: {
            id: true,
          },
        },

        creatureLevelStats: {
          select: {
            id: true,
          },
        },

        creatureLoots: {
          select: {
            id: true,
          },
        },

        creatureModelInfo: {
          select: {
            id: true,
          },
        },

        creatureMovementInfos: {
          select: {
            id: true,
          },
        },

        id: true,
        mapId: true,
        modelId: true,
        name: true,
        realmId: true,
        transformId: true,
        updatedAt: true,
        zoneId: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/creatures")
  @GrpcMethod("CreatureModelInfoService", "connectCreatures")
  async connectCreatures(
    @common.Param() params: CreatureModelInfoWhereUniqueInput,
    @common.Body() body: CreatureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      creatures: {
        connect: body,
      },
    };
    await this.service.updateCreatureModelInfo({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/creatures")
  @GrpcMethod("CreatureModelInfoService", "updateCreatures")
  async updateCreatures(
    @common.Param() params: CreatureModelInfoWhereUniqueInput,
    @common.Body() body: CreatureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      creatures: {
        set: body,
      },
    };
    await this.service.updateCreatureModelInfo({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/creatures")
  @GrpcMethod("CreatureModelInfoService", "disconnectCreatures")
  async disconnectCreatures(
    @common.Param() params: CreatureModelInfoWhereUniqueInput,
    @common.Body() body: CreatureWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      creatures: {
        disconnect: body,
      },
    };
    await this.service.updateCreatureModelInfo({
      where: params,
      data,
      select: { id: true },
    });
  }
}
