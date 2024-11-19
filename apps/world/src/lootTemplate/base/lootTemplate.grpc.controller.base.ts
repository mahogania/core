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
import { LootTemplateService } from "../lootTemplate.service";
import { LootTemplateCreateInput } from "./LootTemplateCreateInput";
import { LootTemplateWhereInput } from "./LootTemplateWhereInput";
import { LootTemplateWhereUniqueInput } from "./LootTemplateWhereUniqueInput";
import { LootTemplateFindManyArgs } from "./LootTemplateFindManyArgs";
import { LootTemplateUpdateInput } from "./LootTemplateUpdateInput";
import { LootTemplate } from "./LootTemplate";
import { GameObjectLootTemplateFindManyArgs } from "../../gameObjectLootTemplate/base/GameObjectLootTemplateFindManyArgs";
import { GameObjectLootTemplate } from "../../gameObjectLootTemplate/base/GameObjectLootTemplate";
import { GameObjectLootTemplateWhereUniqueInput } from "../../gameObjectLootTemplate/base/GameObjectLootTemplateWhereUniqueInput";
import { MailLootTemplateFindManyArgs } from "../../mailLootTemplate/base/MailLootTemplateFindManyArgs";
import { MailLootTemplate } from "../../mailLootTemplate/base/MailLootTemplate";
import { MailLootTemplateWhereUniqueInput } from "../../mailLootTemplate/base/MailLootTemplateWhereUniqueInput";
import { MillingLootTemplateFindManyArgs } from "../../millingLootTemplate/base/MillingLootTemplateFindManyArgs";
import { MillingLootTemplate } from "../../millingLootTemplate/base/MillingLootTemplate";
import { MillingLootTemplateWhereUniqueInput } from "../../millingLootTemplate/base/MillingLootTemplateWhereUniqueInput";

export class LootTemplateGrpcControllerBase {
  constructor(protected readonly service: LootTemplateService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LootTemplate })
  @GrpcMethod("LootTemplateService", "createLootTemplate")
  async createLootTemplate(
    @common.Body() data: LootTemplateCreateInput
  ): Promise<LootTemplate> {
    return await this.service.createLootTemplate({
      data: data,
      select: {
        chance: true,
        comment: true,
        createdAt: true,
        entry: true,
        groupId: true,
        id: true,
        item: true,
        lootMode: true,
        maxCount: true,
        minCount: true,
        questRequired: true,
        reference: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [LootTemplate] })
  @ApiNestedQuery(LootTemplateFindManyArgs)
  @GrpcMethod("LootTemplateService", "lootTemplates")
  async lootTemplates(@common.Req() request: Request): Promise<LootTemplate[]> {
    const args = plainToClass(LootTemplateFindManyArgs, request.query);
    return this.service.lootTemplates({
      ...args,
      select: {
        chance: true,
        comment: true,
        createdAt: true,
        entry: true,
        groupId: true,
        id: true,
        item: true,
        lootMode: true,
        maxCount: true,
        minCount: true,
        questRequired: true,
        reference: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LootTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("LootTemplateService", "lootTemplate")
  async lootTemplate(
    @common.Param() params: LootTemplateWhereUniqueInput
  ): Promise<LootTemplate | null> {
    const result = await this.service.lootTemplate({
      where: params,
      select: {
        chance: true,
        comment: true,
        createdAt: true,
        entry: true,
        groupId: true,
        id: true,
        item: true,
        lootMode: true,
        maxCount: true,
        minCount: true,
        questRequired: true,
        reference: true,
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
  @swagger.ApiOkResponse({ type: LootTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("LootTemplateService", "updateLootTemplate")
  async updateLootTemplate(
    @common.Param() params: LootTemplateWhereUniqueInput,
    @common.Body() data: LootTemplateUpdateInput
  ): Promise<LootTemplate | null> {
    try {
      return await this.service.updateLootTemplate({
        where: params,
        data: data,
        select: {
          chance: true,
          comment: true,
          createdAt: true,
          entry: true,
          groupId: true,
          id: true,
          item: true,
          lootMode: true,
          maxCount: true,
          minCount: true,
          questRequired: true,
          reference: true,
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
  @swagger.ApiOkResponse({ type: LootTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("LootTemplateService", "deleteLootTemplate")
  async deleteLootTemplate(
    @common.Param() params: LootTemplateWhereUniqueInput
  ): Promise<LootTemplate | null> {
    try {
      return await this.service.deleteLootTemplate({
        where: params,
        select: {
          chance: true,
          comment: true,
          createdAt: true,
          entry: true,
          groupId: true,
          id: true,
          item: true,
          lootMode: true,
          maxCount: true,
          minCount: true,
          questRequired: true,
          reference: true,
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

  @common.Get("/:id/gameObjectLootTemplates")
  @ApiNestedQuery(GameObjectLootTemplateFindManyArgs)
  @GrpcMethod("LootTemplateService", "findManyGameObjectLootTemplates")
  async findManyGameObjectLootTemplates(
    @common.Req() request: Request,
    @common.Param() params: LootTemplateWhereUniqueInput
  ): Promise<GameObjectLootTemplate[]> {
    const query = plainToClass(
      GameObjectLootTemplateFindManyArgs,
      request.query
    );
    const results = await this.service.findGameObjectLootTemplates(params.id, {
      ...query,
      select: {
        chance: true,
        comment: true,
        createdAt: true,
        groupId: true,
        id: true,
        itemId: true,
        lootMode: true,

        lootTemplate: {
          select: {
            id: true,
          },
        },

        maxCount: true,
        minCount: true,
        questId: true,
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

  @common.Post("/:id/gameObjectLootTemplates")
  @GrpcMethod("LootTemplateService", "connectGameObjectLootTemplates")
  async connectGameObjectLootTemplates(
    @common.Param() params: LootTemplateWhereUniqueInput,
    @common.Body() body: GameObjectLootTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      gameObjectLootTemplates: {
        connect: body,
      },
    };
    await this.service.updateLootTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/gameObjectLootTemplates")
  @GrpcMethod("LootTemplateService", "updateGameObjectLootTemplates")
  async updateGameObjectLootTemplates(
    @common.Param() params: LootTemplateWhereUniqueInput,
    @common.Body() body: GameObjectLootTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      gameObjectLootTemplates: {
        set: body,
      },
    };
    await this.service.updateLootTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/gameObjectLootTemplates")
  @GrpcMethod("LootTemplateService", "disconnectGameObjectLootTemplates")
  async disconnectGameObjectLootTemplates(
    @common.Param() params: LootTemplateWhereUniqueInput,
    @common.Body() body: GameObjectLootTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      gameObjectLootTemplates: {
        disconnect: body,
      },
    };
    await this.service.updateLootTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/mailLootTemplates")
  @ApiNestedQuery(MailLootTemplateFindManyArgs)
  @GrpcMethod("LootTemplateService", "findManyMailLootTemplates")
  async findManyMailLootTemplates(
    @common.Req() request: Request,
    @common.Param() params: LootTemplateWhereUniqueInput
  ): Promise<MailLootTemplate[]> {
    const query = plainToClass(MailLootTemplateFindManyArgs, request.query);
    const results = await this.service.findMailLootTemplates(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        lootTemplate: {
          select: {
            id: true,
          },
        },

        sender: true,
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

  @common.Post("/:id/mailLootTemplates")
  @GrpcMethod("LootTemplateService", "connectMailLootTemplates")
  async connectMailLootTemplates(
    @common.Param() params: LootTemplateWhereUniqueInput,
    @common.Body() body: MailLootTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mailLootTemplates: {
        connect: body,
      },
    };
    await this.service.updateLootTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/mailLootTemplates")
  @GrpcMethod("LootTemplateService", "updateMailLootTemplates")
  async updateMailLootTemplates(
    @common.Param() params: LootTemplateWhereUniqueInput,
    @common.Body() body: MailLootTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mailLootTemplates: {
        set: body,
      },
    };
    await this.service.updateLootTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/mailLootTemplates")
  @GrpcMethod("LootTemplateService", "disconnectMailLootTemplates")
  async disconnectMailLootTemplates(
    @common.Param() params: LootTemplateWhereUniqueInput,
    @common.Body() body: MailLootTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      mailLootTemplates: {
        disconnect: body,
      },
    };
    await this.service.updateLootTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/millingLootTemplates")
  @ApiNestedQuery(MillingLootTemplateFindManyArgs)
  @GrpcMethod("LootTemplateService", "findManyMillingLootTemplates")
  async findManyMillingLootTemplates(
    @common.Req() request: Request,
    @common.Param() params: LootTemplateWhereUniqueInput
  ): Promise<MillingLootTemplate[]> {
    const query = plainToClass(MillingLootTemplateFindManyArgs, request.query);
    const results = await this.service.findMillingLootTemplates(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        lootTemplate: {
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

  @common.Post("/:id/millingLootTemplates")
  @GrpcMethod("LootTemplateService", "connectMillingLootTemplates")
  async connectMillingLootTemplates(
    @common.Param() params: LootTemplateWhereUniqueInput,
    @common.Body() body: MillingLootTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      millingLootTemplates: {
        connect: body,
      },
    };
    await this.service.updateLootTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/millingLootTemplates")
  @GrpcMethod("LootTemplateService", "updateMillingLootTemplates")
  async updateMillingLootTemplates(
    @common.Param() params: LootTemplateWhereUniqueInput,
    @common.Body() body: MillingLootTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      millingLootTemplates: {
        set: body,
      },
    };
    await this.service.updateLootTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/millingLootTemplates")
  @GrpcMethod("LootTemplateService", "disconnectMillingLootTemplates")
  async disconnectMillingLootTemplates(
    @common.Param() params: LootTemplateWhereUniqueInput,
    @common.Body() body: MillingLootTemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      millingLootTemplates: {
        disconnect: body,
      },
    };
    await this.service.updateLootTemplate({
      where: params,
      data,
      select: { id: true },
    });
  }
}