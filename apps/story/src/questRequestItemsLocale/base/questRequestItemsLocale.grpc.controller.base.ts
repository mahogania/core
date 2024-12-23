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
import { QuestRequestItemsLocaleService } from "../questRequestItemsLocale.service";
import { QuestRequestItemsLocaleCreateInput } from "./QuestRequestItemsLocaleCreateInput";
import { QuestRequestItemsLocaleWhereInput } from "./QuestRequestItemsLocaleWhereInput";
import { QuestRequestItemsLocaleWhereUniqueInput } from "./QuestRequestItemsLocaleWhereUniqueInput";
import { QuestRequestItemsLocaleFindManyArgs } from "./QuestRequestItemsLocaleFindManyArgs";
import { QuestRequestItemsLocaleUpdateInput } from "./QuestRequestItemsLocaleUpdateInput";
import { QuestRequestItemsLocale } from "./QuestRequestItemsLocale";

export class QuestRequestItemsLocaleGrpcControllerBase {
  constructor(protected readonly service: QuestRequestItemsLocaleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QuestRequestItemsLocale })
  @GrpcMethod("QuestRequestItemsLocaleService", "createQuestRequestItemsLocale")
  async createQuestRequestItemsLocale(
    @common.Body() data: QuestRequestItemsLocaleCreateInput
  ): Promise<QuestRequestItemsLocale> {
    return await this.service.createQuestRequestItemsLocale({
      data: {
        ...data,

        questRequestItem: data.questRequestItem
          ? {
              connect: data.questRequestItem,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        questRequestItem: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [QuestRequestItemsLocale] })
  @ApiNestedQuery(QuestRequestItemsLocaleFindManyArgs)
  @GrpcMethod("QuestRequestItemsLocaleService", "questRequestItemsLocales")
  async questRequestItemsLocales(
    @common.Req() request: Request
  ): Promise<QuestRequestItemsLocale[]> {
    const args = plainToClass(
      QuestRequestItemsLocaleFindManyArgs,
      request.query
    );
    return this.service.questRequestItemsLocales({
      ...args,
      select: {
        createdAt: true,
        id: true,

        questRequestItem: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: QuestRequestItemsLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestRequestItemsLocaleService", "questRequestItemsLocale")
  async questRequestItemsLocale(
    @common.Param() params: QuestRequestItemsLocaleWhereUniqueInput
  ): Promise<QuestRequestItemsLocale | null> {
    const result = await this.service.questRequestItemsLocale({
      where: params,
      select: {
        createdAt: true,
        id: true,

        questRequestItem: {
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
  @swagger.ApiOkResponse({ type: QuestRequestItemsLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestRequestItemsLocaleService", "updateQuestRequestItemsLocale")
  async updateQuestRequestItemsLocale(
    @common.Param() params: QuestRequestItemsLocaleWhereUniqueInput,
    @common.Body() data: QuestRequestItemsLocaleUpdateInput
  ): Promise<QuestRequestItemsLocale | null> {
    try {
      return await this.service.updateQuestRequestItemsLocale({
        where: params,
        data: {
          ...data,

          questRequestItem: data.questRequestItem
            ? {
                connect: data.questRequestItem,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          questRequestItem: {
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
  @swagger.ApiOkResponse({ type: QuestRequestItemsLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("QuestRequestItemsLocaleService", "deleteQuestRequestItemsLocale")
  async deleteQuestRequestItemsLocale(
    @common.Param() params: QuestRequestItemsLocaleWhereUniqueInput
  ): Promise<QuestRequestItemsLocale | null> {
    try {
      return await this.service.deleteQuestRequestItemsLocale({
        where: params,
        select: {
          createdAt: true,
          id: true,

          questRequestItem: {
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
