/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Creature } from "./Creature";
import { CreatureCountArgs } from "./CreatureCountArgs";
import { CreatureFindManyArgs } from "./CreatureFindManyArgs";
import { CreatureFindUniqueArgs } from "./CreatureFindUniqueArgs";
import { CreateCreatureArgs } from "./CreateCreatureArgs";
import { UpdateCreatureArgs } from "./UpdateCreatureArgs";
import { DeleteCreatureArgs } from "./DeleteCreatureArgs";
import { CreatureEquipment } from "../../creatureEquipment/base/CreatureEquipment";
import { CreatureFormation } from "../../creatureFormation/base/CreatureFormation";
import { CreatureImmunity } from "../../creatureImmunity/base/CreatureImmunity";
import { CreatureLevelStat } from "../../creatureLevelStat/base/CreatureLevelStat";
import { CreatureLoot } from "../../creatureLoot/base/CreatureLoot";
import { CreatureModelInfo } from "../../creatureModelInfo/base/CreatureModelInfo";
import { CreatureMovementInfo } from "../../creatureMovementInfo/base/CreatureMovementInfo";
import { CreatureService } from "../creature.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Creature)
export class CreatureResolverBase {
  constructor(
    protected readonly service: CreatureService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Creature",
    action: "read",
    possession: "any",
  })
  async _creaturesMeta(
    @graphql.Args() args: CreatureCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Creature])
  @nestAccessControl.UseRoles({
    resource: "Creature",
    action: "read",
    possession: "any",
  })
  async creatures(
    @graphql.Args() args: CreatureFindManyArgs
  ): Promise<Creature[]> {
    return this.service.creatures(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Creature, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Creature",
    action: "read",
    possession: "own",
  })
  async creature(
    @graphql.Args() args: CreatureFindUniqueArgs
  ): Promise<Creature | null> {
    const result = await this.service.creature(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Creature)
  @nestAccessControl.UseRoles({
    resource: "Creature",
    action: "create",
    possession: "any",
  })
  async createCreature(
    @graphql.Args() args: CreateCreatureArgs
  ): Promise<Creature> {
    return await this.service.createCreature({
      ...args,
      data: {
        ...args.data,

        creatureEquipments: args.data.creatureEquipments
          ? {
              connect: args.data.creatureEquipments,
            }
          : undefined,

        creatureFormations: args.data.creatureFormations
          ? {
              connect: args.data.creatureFormations,
            }
          : undefined,

        creatureImmunities: args.data.creatureImmunities
          ? {
              connect: args.data.creatureImmunities,
            }
          : undefined,

        creatureLevelStats: args.data.creatureLevelStats
          ? {
              connect: args.data.creatureLevelStats,
            }
          : undefined,

        creatureLoots: args.data.creatureLoots
          ? {
              connect: args.data.creatureLoots,
            }
          : undefined,

        creatureModelInfo: {
          connect: args.data.creatureModelInfo,
        },

        creatureMovementInfos: {
          connect: args.data.creatureMovementInfos,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Creature)
  @nestAccessControl.UseRoles({
    resource: "Creature",
    action: "update",
    possession: "any",
  })
  async updateCreature(
    @graphql.Args() args: UpdateCreatureArgs
  ): Promise<Creature | null> {
    try {
      return await this.service.updateCreature({
        ...args,
        data: {
          ...args.data,

          creatureEquipments: args.data.creatureEquipments
            ? {
                connect: args.data.creatureEquipments,
              }
            : undefined,

          creatureFormations: args.data.creatureFormations
            ? {
                connect: args.data.creatureFormations,
              }
            : undefined,

          creatureImmunities: args.data.creatureImmunities
            ? {
                connect: args.data.creatureImmunities,
              }
            : undefined,

          creatureLevelStats: args.data.creatureLevelStats
            ? {
                connect: args.data.creatureLevelStats,
              }
            : undefined,

          creatureLoots: args.data.creatureLoots
            ? {
                connect: args.data.creatureLoots,
              }
            : undefined,

          creatureModelInfo: {
            connect: args.data.creatureModelInfo,
          },

          creatureMovementInfos: {
            connect: args.data.creatureMovementInfos,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Creature)
  @nestAccessControl.UseRoles({
    resource: "Creature",
    action: "delete",
    possession: "any",
  })
  async deleteCreature(
    @graphql.Args() args: DeleteCreatureArgs
  ): Promise<Creature | null> {
    try {
      return await this.service.deleteCreature(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => CreatureEquipment, {
    nullable: true,
    name: "creatureEquipments",
  })
  @nestAccessControl.UseRoles({
    resource: "CreatureEquipment",
    action: "read",
    possession: "any",
  })
  async getCreatureEquipments(
    @graphql.Parent() parent: Creature
  ): Promise<CreatureEquipment | null> {
    const result = await this.service.getCreatureEquipments(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => CreatureFormation, {
    nullable: true,
    name: "creatureFormations",
  })
  @nestAccessControl.UseRoles({
    resource: "CreatureFormation",
    action: "read",
    possession: "any",
  })
  async getCreatureFormations(
    @graphql.Parent() parent: Creature
  ): Promise<CreatureFormation | null> {
    const result = await this.service.getCreatureFormations(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => CreatureImmunity, {
    nullable: true,
    name: "creatureImmunities",
  })
  @nestAccessControl.UseRoles({
    resource: "CreatureImmunity",
    action: "read",
    possession: "any",
  })
  async getCreatureImmunities(
    @graphql.Parent() parent: Creature
  ): Promise<CreatureImmunity | null> {
    const result = await this.service.getCreatureImmunities(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => CreatureLevelStat, {
    nullable: true,
    name: "creatureLevelStats",
  })
  @nestAccessControl.UseRoles({
    resource: "CreatureLevelStat",
    action: "read",
    possession: "any",
  })
  async getCreatureLevelStats(
    @graphql.Parent() parent: Creature
  ): Promise<CreatureLevelStat | null> {
    const result = await this.service.getCreatureLevelStats(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => CreatureLoot, {
    nullable: true,
    name: "creatureLoots",
  })
  @nestAccessControl.UseRoles({
    resource: "CreatureLoot",
    action: "read",
    possession: "any",
  })
  async getCreatureLoots(
    @graphql.Parent() parent: Creature
  ): Promise<CreatureLoot | null> {
    const result = await this.service.getCreatureLoots(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => CreatureModelInfo, {
    nullable: true,
    name: "creatureModelInfo",
  })
  @nestAccessControl.UseRoles({
    resource: "CreatureModelInfo",
    action: "read",
    possession: "any",
  })
  async getCreatureModelInfo(
    @graphql.Parent() parent: Creature
  ): Promise<CreatureModelInfo | null> {
    const result = await this.service.getCreatureModelInfo(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => CreatureMovementInfo, {
    nullable: true,
    name: "creatureMovementInfos",
  })
  @nestAccessControl.UseRoles({
    resource: "CreatureMovementInfo",
    action: "read",
    possession: "any",
  })
  async getCreatureMovementInfos(
    @graphql.Parent() parent: Creature
  ): Promise<CreatureMovementInfo | null> {
    const result = await this.service.getCreatureMovementInfos(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
