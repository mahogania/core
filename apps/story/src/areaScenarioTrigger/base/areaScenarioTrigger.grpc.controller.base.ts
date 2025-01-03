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
import { AreaScenarioTriggerService } from "../areaScenarioTrigger.service";
import { AreaScenarioTriggerCreateInput } from "./AreaScenarioTriggerCreateInput";
import { AreaScenarioTriggerWhereInput } from "./AreaScenarioTriggerWhereInput";
import { AreaScenarioTriggerWhereUniqueInput } from "./AreaScenarioTriggerWhereUniqueInput";
import { AreaScenarioTriggerFindManyArgs } from "./AreaScenarioTriggerFindManyArgs";
import { AreaScenarioTriggerUpdateInput } from "./AreaScenarioTriggerUpdateInput";
import { AreaScenarioTrigger } from "./AreaScenarioTrigger";

export class AreaScenarioTriggerGrpcControllerBase {
  constructor(protected readonly service: AreaScenarioTriggerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AreaScenarioTrigger })
  @GrpcMethod("AreaScenarioTriggerService", "createAreaScenarioTrigger")
  async createAreaScenarioTrigger(
    @common.Body() data: AreaScenarioTriggerCreateInput
  ): Promise<AreaScenarioTrigger> {
    return await this.service.createAreaScenarioTrigger({
      data: {
        ...data,

        area: data.area
          ? {
              connect: data.area,
            }
          : undefined,

        scenario: data.scenario
          ? {
              connect: data.scenario,
            }
          : undefined,
      },
      select: {
        area: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,

        scenario: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AreaScenarioTrigger] })
  @ApiNestedQuery(AreaScenarioTriggerFindManyArgs)
  @GrpcMethod("AreaScenarioTriggerService", "areaScenarioTriggers")
  async areaScenarioTriggers(
    @common.Req() request: Request
  ): Promise<AreaScenarioTrigger[]> {
    const args = plainToClass(AreaScenarioTriggerFindManyArgs, request.query);
    return this.service.areaScenarioTriggers({
      ...args,
      select: {
        area: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,

        scenario: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AreaScenarioTrigger })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("AreaScenarioTriggerService", "areaScenarioTrigger")
  async areaScenarioTrigger(
    @common.Param() params: AreaScenarioTriggerWhereUniqueInput
  ): Promise<AreaScenarioTrigger | null> {
    const result = await this.service.areaScenarioTrigger({
      where: params,
      select: {
        area: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,

        scenario: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: AreaScenarioTrigger })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("AreaScenarioTriggerService", "updateAreaScenarioTrigger")
  async updateAreaScenarioTrigger(
    @common.Param() params: AreaScenarioTriggerWhereUniqueInput,
    @common.Body() data: AreaScenarioTriggerUpdateInput
  ): Promise<AreaScenarioTrigger | null> {
    try {
      return await this.service.updateAreaScenarioTrigger({
        where: params,
        data: {
          ...data,

          area: data.area
            ? {
                connect: data.area,
              }
            : undefined,

          scenario: data.scenario
            ? {
                connect: data.scenario,
              }
            : undefined,
        },
        select: {
          area: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          name: true,

          scenario: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: AreaScenarioTrigger })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("AreaScenarioTriggerService", "deleteAreaScenarioTrigger")
  async deleteAreaScenarioTrigger(
    @common.Param() params: AreaScenarioTriggerWhereUniqueInput
  ): Promise<AreaScenarioTrigger | null> {
    try {
      return await this.service.deleteAreaScenarioTrigger({
        where: params,
        select: {
          area: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          name: true,

          scenario: {
            select: {
              id: true,
            },
          },

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
