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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { CharacterService } from "../character.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CharacterCreateInput } from "./CharacterCreateInput";
import { Character } from "./Character";
import { CharacterFindManyArgs } from "./CharacterFindManyArgs";
import { CharacterWhereUniqueInput } from "./CharacterWhereUniqueInput";
import { CharacterUpdateInput } from "./CharacterUpdateInput";
import { CharacterDialogueFindManyArgs } from "../../characterDialogue/base/CharacterDialogueFindManyArgs";
import { CharacterDialogue } from "../../characterDialogue/base/CharacterDialogue";
import { CharacterDialogueWhereUniqueInput } from "../../characterDialogue/base/CharacterDialogueWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CharacterControllerBase {
  constructor(
    protected readonly service: CharacterService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Character })
  @nestAccessControl.UseRoles({
    resource: "Character",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CharacterCreateInput,
  })
  async createCharacter(
    @common.Body() data: CharacterCreateInput
  ): Promise<Character> {
    return await this.service.createCharacter({
      data: {
        ...data,

        characterSpells: data.characterSpells
          ? {
              connect: data.characterSpells,
            }
          : undefined,
      },
      select: {
        characterSpells: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Character] })
  @ApiNestedQuery(CharacterFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Character",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async characters(@common.Req() request: Request): Promise<Character[]> {
    const args = plainToClass(CharacterFindManyArgs, request.query);
    return this.service.characters({
      ...args,
      select: {
        characterSpells: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Character })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Character",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async character(
    @common.Param() params: CharacterWhereUniqueInput
  ): Promise<Character | null> {
    const result = await this.service.character({
      where: params,
      select: {
        characterSpells: {
          select: {
            id: true,
          },
        },

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

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Character })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Character",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CharacterUpdateInput,
  })
  async updateCharacter(
    @common.Param() params: CharacterWhereUniqueInput,
    @common.Body() data: CharacterUpdateInput
  ): Promise<Character | null> {
    try {
      return await this.service.updateCharacter({
        where: params,
        data: {
          ...data,

          characterSpells: data.characterSpells
            ? {
                connect: data.characterSpells,
              }
            : undefined,
        },
        select: {
          characterSpells: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: Character })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Character",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCharacter(
    @common.Param() params: CharacterWhereUniqueInput
  ): Promise<Character | null> {
    try {
      return await this.service.deleteCharacter({
        where: params,
        select: {
          characterSpells: {
            select: {
              id: true,
            },
          },

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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/characterDialogues")
  @ApiNestedQuery(CharacterDialogueFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CharacterDialogue",
    action: "read",
    possession: "any",
  })
  async findCharacterDialogues(
    @common.Req() request: Request,
    @common.Param() params: CharacterWhereUniqueInput
  ): Promise<CharacterDialogue[]> {
    const query = plainToClass(CharacterDialogueFindManyArgs, request.query);
    const results = await this.service.findCharacterDialogues(params.id, {
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

  @common.Post("/:id/characterDialogues")
  @nestAccessControl.UseRoles({
    resource: "Character",
    action: "update",
    possession: "any",
  })
  async connectCharacterDialogues(
    @common.Param() params: CharacterWhereUniqueInput,
    @common.Body() body: CharacterDialogueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      characterDialogues: {
        connect: body,
      },
    };
    await this.service.updateCharacter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/characterDialogues")
  @nestAccessControl.UseRoles({
    resource: "Character",
    action: "update",
    possession: "any",
  })
  async updateCharacterDialogues(
    @common.Param() params: CharacterWhereUniqueInput,
    @common.Body() body: CharacterDialogueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      characterDialogues: {
        set: body,
      },
    };
    await this.service.updateCharacter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/characterDialogues")
  @nestAccessControl.UseRoles({
    resource: "Character",
    action: "update",
    possession: "any",
  })
  async disconnectCharacterDialogues(
    @common.Param() params: CharacterWhereUniqueInput,
    @common.Body() body: CharacterDialogueWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      characterDialogues: {
        disconnect: body,
      },
    };
    await this.service.updateCharacter({
      where: params,
      data,
      select: { id: true },
    });
  }
}
