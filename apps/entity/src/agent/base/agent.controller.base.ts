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
import { AgentService } from "../agent.service";
import { AgentCreateInput } from "./AgentCreateInput";
import { Agent } from "./Agent";
import { AgentFindManyArgs } from "./AgentFindManyArgs";
import { AgentWhereUniqueInput } from "./AgentWhereUniqueInput";
import { AgentUpdateInput } from "./AgentUpdateInput";
import { EntityFindManyArgs } from "../../entity/base/EntityFindManyArgs";
import { Entity } from "../../entity/base/Entity";
import { EntityWhereUniqueInput } from "../../entity/base/EntityWhereUniqueInput";

export class AgentControllerBase {
  constructor(protected readonly service: AgentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Agent })
  @swagger.ApiBody({
    type: AgentCreateInput,
  })
  async createAgent(@common.Body() data: AgentCreateInput): Promise<Agent> {
    return await this.service.createAgent({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Agent] })
  @ApiNestedQuery(AgentFindManyArgs)
  async agents(@common.Req() request: Request): Promise<Agent[]> {
    const args = plainToClass(AgentFindManyArgs, request.query);
    return this.service.agents({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Agent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async agent(
    @common.Param() params: AgentWhereUniqueInput
  ): Promise<Agent | null> {
    const result = await this.service.agent({
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
  @swagger.ApiOkResponse({ type: Agent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: AgentUpdateInput,
  })
  async updateAgent(
    @common.Param() params: AgentWhereUniqueInput,
    @common.Body() data: AgentUpdateInput
  ): Promise<Agent | null> {
    try {
      return await this.service.updateAgent({
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
  @swagger.ApiOkResponse({ type: Agent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAgent(
    @common.Param() params: AgentWhereUniqueInput
  ): Promise<Agent | null> {
    try {
      return await this.service.deleteAgent({
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

  @common.Get("/:id/entities")
  @ApiNestedQuery(EntityFindManyArgs)
  async findEntities(
    @common.Req() request: Request,
    @common.Param() params: AgentWhereUniqueInput
  ): Promise<Entity[]> {
    const query = plainToClass(EntityFindManyArgs, request.query);
    const results = await this.service.findEntities(params.id, {
      ...query,
      select: {
        agent: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        displayName: true,
        id: true,
        name: true,

        owner: {
          select: {
            id: true,
          },
        },

        representation: {
          select: {
            id: true,
          },
        },

        template: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        version: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/entities")
  async connectEntities(
    @common.Param() params: AgentWhereUniqueInput,
    @common.Body() body: EntityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      entities: {
        connect: body,
      },
    };
    await this.service.updateAgent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/entities")
  async updateEntities(
    @common.Param() params: AgentWhereUniqueInput,
    @common.Body() body: EntityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      entities: {
        set: body,
      },
    };
    await this.service.updateAgent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/entities")
  async disconnectEntities(
    @common.Param() params: AgentWhereUniqueInput,
    @common.Body() body: EntityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      entities: {
        disconnect: body,
      },
    };
    await this.service.updateAgent({
      where: params,
      data,
      select: { id: true },
    });
  }
}