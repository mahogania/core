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
import { ParagraphService } from "../paragraph.service";
import { ParagraphCreateInput } from "./ParagraphCreateInput";
import { ParagraphWhereInput } from "./ParagraphWhereInput";
import { ParagraphWhereUniqueInput } from "./ParagraphWhereUniqueInput";
import { ParagraphFindManyArgs } from "./ParagraphFindManyArgs";
import { ParagraphUpdateInput } from "./ParagraphUpdateInput";
import { Paragraph } from "./Paragraph";
import { CharacterDialogueFindManyArgs } from "../../characterDialogue/base/CharacterDialogueFindManyArgs";
import { CharacterDialogue } from "../../characterDialogue/base/CharacterDialogue";
import { CharacterDialogueWhereUniqueInput } from "../../characterDialogue/base/CharacterDialogueWhereUniqueInput";

export class ParagraphGrpcControllerBase {
  constructor(protected readonly service: ParagraphService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Paragraph })
  @GrpcMethod("ParagraphService", "createParagraph")
  async createParagraph(
    @common.Body() data: ParagraphCreateInput
  ): Promise<Paragraph> {
    return await this.service.createParagraph({
      data: {
        ...data,

        paragraphLocales: data.paragraphLocales
          ? {
              connect: data.paragraphLocales,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        paragraphLocales: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Paragraph] })
  @ApiNestedQuery(ParagraphFindManyArgs)
  @GrpcMethod("ParagraphService", "paragraphs")
  async paragraphs(@common.Req() request: Request): Promise<Paragraph[]> {
    const args = plainToClass(ParagraphFindManyArgs, request.query);
    return this.service.paragraphs({
      ...args,
      select: {
        createdAt: true,
        id: true,

        paragraphLocales: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Paragraph })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ParagraphService", "paragraph")
  async paragraph(
    @common.Param() params: ParagraphWhereUniqueInput
  ): Promise<Paragraph | null> {
    const result = await this.service.paragraph({
      where: params,
      select: {
        createdAt: true,
        id: true,

        paragraphLocales: {
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
  @swagger.ApiOkResponse({ type: Paragraph })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ParagraphService", "updateParagraph")
  async updateParagraph(
    @common.Param() params: ParagraphWhereUniqueInput,
    @common.Body() data: ParagraphUpdateInput
  ): Promise<Paragraph | null> {
    try {
      return await this.service.updateParagraph({
        where: params,
        data: {
          ...data,

          paragraphLocales: data.paragraphLocales
            ? {
                connect: data.paragraphLocales,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          paragraphLocales: {
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
  @swagger.ApiOkResponse({ type: Paragraph })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ParagraphService", "deleteParagraph")
  async deleteParagraph(
    @common.Param() params: ParagraphWhereUniqueInput
  ): Promise<Paragraph | null> {
    try {
      return await this.service.deleteParagraph({
        where: params,
        select: {
          createdAt: true,
          id: true,

          paragraphLocales: {
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

  @common.Get("/:id/characterLines")
  @ApiNestedQuery(CharacterDialogueFindManyArgs)
  @GrpcMethod("ParagraphService", "findManyCharacterLines")
  async findManyCharacterLines(
    @common.Req() request: Request,
    @common.Param() params: ParagraphWhereUniqueInput
  ): Promise<CharacterDialogue[]> {
    const query = plainToClass(CharacterDialogueFindManyArgs, request.query);
    const results = await this.service.findCharacterLines(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
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

  @common.Post("/:id/characterLines")
  @GrpcMethod("ParagraphService", "connectCharacterLines")
  async connectCharacterLines(
    @common.Param() params: ParagraphWhereUniqueInput,
    @common.Body() body: CharacterDialogueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      characterLines: {
        connect: body,
      },
    };
    await this.service.updateParagraph({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/characterLines")
  @GrpcMethod("ParagraphService", "updateCharacterLines")
  async updateCharacterLines(
    @common.Param() params: ParagraphWhereUniqueInput,
    @common.Body() body: CharacterDialogueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      characterLines: {
        set: body,
      },
    };
    await this.service.updateParagraph({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/characterLines")
  @GrpcMethod("ParagraphService", "disconnectCharacterLines")
  async disconnectCharacterLines(
    @common.Param() params: ParagraphWhereUniqueInput,
    @common.Body() body: CharacterDialogueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      characterLines: {
        disconnect: body,
      },
    };
    await this.service.updateParagraph({
      where: params,
      data,
      select: { id: true },
    });
  }
}
