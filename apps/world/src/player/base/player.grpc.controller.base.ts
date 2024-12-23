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
import { PlayerService } from "../player.service";
import { PlayerCreateInput } from "./PlayerCreateInput";
import { PlayerWhereInput } from "./PlayerWhereInput";
import { PlayerWhereUniqueInput } from "./PlayerWhereUniqueInput";
import { PlayerFindManyArgs } from "./PlayerFindManyArgs";
import { PlayerUpdateInput } from "./PlayerUpdateInput";
import { Player } from "./Player";
import { PlayerFactionAchievementFindManyArgs } from "../../playerFactionAchievement/base/PlayerFactionAchievementFindManyArgs";
import { PlayerFactionAchievement } from "../../playerFactionAchievement/base/PlayerFactionAchievement";
import { PlayerFactionAchievementWhereUniqueInput } from "../../playerFactionAchievement/base/PlayerFactionAchievementWhereUniqueInput";
import { AchievementFindManyArgs } from "../../achievement/base/AchievementFindManyArgs";
import { Achievement } from "../../achievement/base/Achievement";
import { AchievementWhereUniqueInput } from "../../achievement/base/AchievementWhereUniqueInput";
import { PlayerCraftFindManyArgs } from "../../playerCraft/base/PlayerCraftFindManyArgs";
import { PlayerCraft } from "../../playerCraft/base/PlayerCraft";
import { PlayerCraftWhereUniqueInput } from "../../playerCraft/base/PlayerCraftWhereUniqueInput";
import { PlayerFactionQuestFindManyArgs } from "../../playerFactionQuest/base/PlayerFactionQuestFindManyArgs";
import { PlayerFactionQuest } from "../../playerFactionQuest/base/PlayerFactionQuest";
import { PlayerFactionQuestWhereUniqueInput } from "../../playerFactionQuest/base/PlayerFactionQuestWhereUniqueInput";
import { PlayerFactionReputationFindManyArgs } from "../../playerFactionReputation/base/PlayerFactionReputationFindManyArgs";
import { PlayerFactionReputation } from "../../playerFactionReputation/base/PlayerFactionReputation";
import { PlayerFactionReputationWhereUniqueInput } from "../../playerFactionReputation/base/PlayerFactionReputationWhereUniqueInput";
import { PlayerFactionSpellFindManyArgs } from "../../playerFactionSpell/base/PlayerFactionSpellFindManyArgs";
import { PlayerFactionSpell } from "../../playerFactionSpell/base/PlayerFactionSpell";
import { PlayerFactionSpellWhereUniqueInput } from "../../playerFactionSpell/base/PlayerFactionSpellWhereUniqueInput";
import { PlayerFactionTitleFindManyArgs } from "../../playerFactionTitle/base/PlayerFactionTitleFindManyArgs";
import { PlayerFactionTitle } from "../../playerFactionTitle/base/PlayerFactionTitle";
import { PlayerFactionTitleWhereUniqueInput } from "../../playerFactionTitle/base/PlayerFactionTitleWhereUniqueInput";
import { PlayerXpForLevelFindManyArgs } from "../../playerXpForLevel/base/PlayerXpForLevelFindManyArgs";
import { PlayerXpForLevel } from "../../playerXpForLevel/base/PlayerXpForLevel";
import { PlayerXpForLevelWhereUniqueInput } from "../../playerXpForLevel/base/PlayerXpForLevelWhereUniqueInput";
import { ResponseFindManyArgs } from "../../response/base/ResponseFindManyArgs";
import { Response } from "../../response/base/Response";
import { ResponseWhereUniqueInput } from "../../response/base/ResponseWhereUniqueInput";

export class PlayerGrpcControllerBase {
  constructor(protected readonly service: PlayerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Player })
  @GrpcMethod("PlayerService", "createPlayer")
  async createPlayer(@common.Body() data: PlayerCreateInput): Promise<Player> {
    return await this.service.createPlayer({
      data: {
        ...data,

        geneStats: data.geneStats
          ? {
              connect: data.geneStats,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        geneStats: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Player] })
  @ApiNestedQuery(PlayerFindManyArgs)
  @GrpcMethod("PlayerService", "players")
  async players(@common.Req() request: Request): Promise<Player[]> {
    const args = plainToClass(PlayerFindManyArgs, request.query);
    return this.service.players({
      ...args,
      select: {
        createdAt: true,

        geneStats: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Player })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PlayerService", "player")
  async player(
    @common.Param() params: PlayerWhereUniqueInput
  ): Promise<Player | null> {
    const result = await this.service.player({
      where: params,
      select: {
        createdAt: true,

        geneStats: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: Player })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PlayerService", "updatePlayer")
  async updatePlayer(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() data: PlayerUpdateInput
  ): Promise<Player | null> {
    try {
      return await this.service.updatePlayer({
        where: params,
        data: {
          ...data,

          geneStats: data.geneStats
            ? {
                connect: data.geneStats,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          geneStats: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: Player })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PlayerService", "deletePlayer")
  async deletePlayer(
    @common.Param() params: PlayerWhereUniqueInput
  ): Promise<Player | null> {
    try {
      return await this.service.deletePlayer({
        where: params,
        select: {
          createdAt: true,

          geneStats: {
            select: {
              id: true,
            },
          },

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

  @common.Get("/:id/PlayerFactionAchievements")
  @ApiNestedQuery(PlayerFactionAchievementFindManyArgs)
  @GrpcMethod("PlayerService", "findManyPlayerFactionAchievements")
  async findManyPlayerFactionAchievements(
    @common.Req() request: Request,
    @common.Param() params: PlayerWhereUniqueInput
  ): Promise<PlayerFactionAchievement[]> {
    const query = plainToClass(
      PlayerFactionAchievementFindManyArgs,
      request.query
    );
    const results = await this.service.findPlayerFactionAchievements(
      params.id,
      {
        ...query,
        select: {
          createdAt: true,

          faction: {
            select: {
              id: true,
            },
          },

          id: true,

          player: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      }
    );
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/PlayerFactionAchievements")
  @GrpcMethod("PlayerService", "connectPlayerFactionAchievements")
  async connectPlayerFactionAchievements(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PlayerFactionAchievementWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      PlayerFactionAchievements: {
        connect: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/PlayerFactionAchievements")
  @GrpcMethod("PlayerService", "updatePlayerFactionAchievements")
  async updatePlayerFactionAchievements(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PlayerFactionAchievementWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      PlayerFactionAchievements: {
        set: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/PlayerFactionAchievements")
  @GrpcMethod("PlayerService", "disconnectPlayerFactionAchievements")
  async disconnectPlayerFactionAchievements(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PlayerFactionAchievementWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      PlayerFactionAchievements: {
        disconnect: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/achievements")
  @ApiNestedQuery(AchievementFindManyArgs)
  @GrpcMethod("PlayerService", "findManyAchievements")
  async findManyAchievements(
    @common.Req() request: Request,
    @common.Param() params: PlayerWhereUniqueInput
  ): Promise<Achievement[]> {
    const query = plainToClass(AchievementFindManyArgs, request.query);
    const results = await this.service.findAchievements(params.id, {
      ...query,
      select: {
        achievementRewards: {
          select: {
            id: true,
          },
        },

        count: true,
        createdAt: true,
        flags: true,
        id: true,
        map: true,

        player: {
          select: {
            id: true,
          },
        },

        points: true,
        refAchievement: true,
        requiredFaction: true,
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

  @common.Post("/:id/achievements")
  @GrpcMethod("PlayerService", "connectAchievements")
  async connectAchievements(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: AchievementWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      achievements: {
        connect: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/achievements")
  @GrpcMethod("PlayerService", "updateAchievements")
  async updateAchievements(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: AchievementWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      achievements: {
        set: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/achievements")
  @GrpcMethod("PlayerService", "disconnectAchievements")
  async disconnectAchievements(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: AchievementWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      achievements: {
        disconnect: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/playerCrafts")
  @ApiNestedQuery(PlayerCraftFindManyArgs)
  @GrpcMethod("PlayerService", "findManyPlayerCrafts")
  async findManyPlayerCrafts(
    @common.Req() request: Request,
    @common.Param() params: PlayerWhereUniqueInput
  ): Promise<PlayerCraft[]> {
    const query = plainToClass(PlayerCraftFindManyArgs, request.query);
    const results = await this.service.findPlayerCrafts(params.id, {
      ...query,
      select: {
        craft: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        player: {
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

  @common.Post("/:id/playerCrafts")
  @GrpcMethod("PlayerService", "connectPlayerCrafts")
  async connectPlayerCrafts(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PlayerCraftWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      playerCrafts: {
        connect: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/playerCrafts")
  @GrpcMethod("PlayerService", "updatePlayerCrafts")
  async updatePlayerCrafts(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PlayerCraftWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      playerCrafts: {
        set: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/playerCrafts")
  @GrpcMethod("PlayerService", "disconnectPlayerCrafts")
  async disconnectPlayerCrafts(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PlayerCraftWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      playerCrafts: {
        disconnect: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/playerFactionQuests")
  @ApiNestedQuery(PlayerFactionQuestFindManyArgs)
  @GrpcMethod("PlayerService", "findManyPlayerFactionQuests")
  async findManyPlayerFactionQuests(
    @common.Req() request: Request,
    @common.Param() params: PlayerWhereUniqueInput
  ): Promise<PlayerFactionQuest[]> {
    const query = plainToClass(PlayerFactionQuestFindManyArgs, request.query);
    const results = await this.service.findPlayerFactionQuests(params.id, {
      ...query,
      select: {
        createdAt: true,

        faction: {
          select: {
            id: true,
          },
        },

        id: true,

        player: {
          select: {
            id: true,
          },
        },

        questId: true,
        state: true,
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

  @common.Post("/:id/playerFactionQuests")
  @GrpcMethod("PlayerService", "connectPlayerFactionQuests")
  async connectPlayerFactionQuests(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PlayerFactionQuestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      playerFactionQuests: {
        connect: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/playerFactionQuests")
  @GrpcMethod("PlayerService", "updatePlayerFactionQuests")
  async updatePlayerFactionQuests(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PlayerFactionQuestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      playerFactionQuests: {
        set: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/playerFactionQuests")
  @GrpcMethod("PlayerService", "disconnectPlayerFactionQuests")
  async disconnectPlayerFactionQuests(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PlayerFactionQuestWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      playerFactionQuests: {
        disconnect: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/playerFactionReputations")
  @ApiNestedQuery(PlayerFactionReputationFindManyArgs)
  @GrpcMethod("PlayerService", "findManyPlayerFactionReputations")
  async findManyPlayerFactionReputations(
    @common.Req() request: Request,
    @common.Param() params: PlayerWhereUniqueInput
  ): Promise<PlayerFactionReputation[]> {
    const query = plainToClass(
      PlayerFactionReputationFindManyArgs,
      request.query
    );
    const results = await this.service.findPlayerFactionReputations(params.id, {
      ...query,
      select: {
        amount: true,
        createdAt: true,

        faction: {
          select: {
            id: true,
          },
        },

        id: true,

        player: {
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

  @common.Post("/:id/playerFactionReputations")
  @GrpcMethod("PlayerService", "connectPlayerFactionReputations")
  async connectPlayerFactionReputations(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PlayerFactionReputationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      playerFactionReputations: {
        connect: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/playerFactionReputations")
  @GrpcMethod("PlayerService", "updatePlayerFactionReputations")
  async updatePlayerFactionReputations(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PlayerFactionReputationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      playerFactionReputations: {
        set: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/playerFactionReputations")
  @GrpcMethod("PlayerService", "disconnectPlayerFactionReputations")
  async disconnectPlayerFactionReputations(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PlayerFactionReputationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      playerFactionReputations: {
        disconnect: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/playerFactionSpells")
  @ApiNestedQuery(PlayerFactionSpellFindManyArgs)
  @GrpcMethod("PlayerService", "findManyPlayerFactionSpells")
  async findManyPlayerFactionSpells(
    @common.Req() request: Request,
    @common.Param() params: PlayerWhereUniqueInput
  ): Promise<PlayerFactionSpell[]> {
    const query = plainToClass(PlayerFactionSpellFindManyArgs, request.query);
    const results = await this.service.findPlayerFactionSpells(params.id, {
      ...query,
      select: {
        createdAt: true,

        faction: {
          select: {
            id: true,
          },
        },

        id: true,

        player: {
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

  @common.Post("/:id/playerFactionSpells")
  @GrpcMethod("PlayerService", "connectPlayerFactionSpells")
  async connectPlayerFactionSpells(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PlayerFactionSpellWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      playerFactionSpells: {
        connect: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/playerFactionSpells")
  @GrpcMethod("PlayerService", "updatePlayerFactionSpells")
  async updatePlayerFactionSpells(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PlayerFactionSpellWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      playerFactionSpells: {
        set: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/playerFactionSpells")
  @GrpcMethod("PlayerService", "disconnectPlayerFactionSpells")
  async disconnectPlayerFactionSpells(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PlayerFactionSpellWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      playerFactionSpells: {
        disconnect: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/playerFactionTitles")
  @ApiNestedQuery(PlayerFactionTitleFindManyArgs)
  @GrpcMethod("PlayerService", "findManyPlayerFactionTitles")
  async findManyPlayerFactionTitles(
    @common.Req() request: Request,
    @common.Param() params: PlayerWhereUniqueInput
  ): Promise<PlayerFactionTitle[]> {
    const query = plainToClass(PlayerFactionTitleFindManyArgs, request.query);
    const results = await this.service.findPlayerFactionTitles(params.id, {
      ...query,
      select: {
        createdAt: true,

        faction: {
          select: {
            id: true,
          },
        },

        id: true,

        player: {
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

  @common.Post("/:id/playerFactionTitles")
  @GrpcMethod("PlayerService", "connectPlayerFactionTitles")
  async connectPlayerFactionTitles(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PlayerFactionTitleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      playerFactionTitles: {
        connect: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/playerFactionTitles")
  @GrpcMethod("PlayerService", "updatePlayerFactionTitles")
  async updatePlayerFactionTitles(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PlayerFactionTitleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      playerFactionTitles: {
        set: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/playerFactionTitles")
  @GrpcMethod("PlayerService", "disconnectPlayerFactionTitles")
  async disconnectPlayerFactionTitles(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PlayerFactionTitleWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      playerFactionTitles: {
        disconnect: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/playerXpForLevels")
  @ApiNestedQuery(PlayerXpForLevelFindManyArgs)
  @GrpcMethod("PlayerService", "findManyPlayerXpForLevels")
  async findManyPlayerXpForLevels(
    @common.Req() request: Request,
    @common.Param() params: PlayerWhereUniqueInput
  ): Promise<PlayerXpForLevel[]> {
    const query = plainToClass(PlayerXpForLevelFindManyArgs, request.query);
    const results = await this.service.findPlayerXpForLevels(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        player: {
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

  @common.Post("/:id/playerXpForLevels")
  @GrpcMethod("PlayerService", "connectPlayerXpForLevels")
  async connectPlayerXpForLevels(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PlayerXpForLevelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      playerXpForLevels: {
        connect: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/playerXpForLevels")
  @GrpcMethod("PlayerService", "updatePlayerXpForLevels")
  async updatePlayerXpForLevels(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PlayerXpForLevelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      playerXpForLevels: {
        set: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/playerXpForLevels")
  @GrpcMethod("PlayerService", "disconnectPlayerXpForLevels")
  async disconnectPlayerXpForLevels(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: PlayerXpForLevelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      playerXpForLevels: {
        disconnect: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/responses")
  @ApiNestedQuery(ResponseFindManyArgs)
  @GrpcMethod("PlayerService", "findManyResponses")
  async findManyResponses(
    @common.Req() request: Request,
    @common.Param() params: PlayerWhereUniqueInput
  ): Promise<Response[]> {
    const query = plainToClass(ResponseFindManyArgs, request.query);
    const results = await this.service.findResponses(params.id, {
      ...query,
      select: {
        choice: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        player: {
          select: {
            id: true,
          },
        },

        responseLocales: {
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

  @common.Post("/:id/responses")
  @GrpcMethod("PlayerService", "connectResponses")
  async connectResponses(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: ResponseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      responses: {
        connect: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/responses")
  @GrpcMethod("PlayerService", "updateResponses")
  async updateResponses(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: ResponseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      responses: {
        set: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/responses")
  @GrpcMethod("PlayerService", "disconnectResponses")
  async disconnectResponses(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: ResponseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      responses: {
        disconnect: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }
}
