/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GameObjectTemplateAddonWhereInput } from "./GameObjectTemplateAddonWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { GameObjectTemplateAddonOrderByInput } from "./GameObjectTemplateAddonOrderByInput";

@ArgsType()
class GameObjectTemplateAddonFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => GameObjectTemplateAddonWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => GameObjectTemplateAddonWhereInput, { nullable: true })
  @Type(() => GameObjectTemplateAddonWhereInput)
  where?: GameObjectTemplateAddonWhereInput;

  @ApiProperty({
    required: false,
    type: [GameObjectTemplateAddonOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [GameObjectTemplateAddonOrderByInput], { nullable: true })
  @Type(() => GameObjectTemplateAddonOrderByInput)
  orderBy?: Array<GameObjectTemplateAddonOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { GameObjectTemplateAddonFindManyArgs as GameObjectTemplateAddonFindManyArgs };
