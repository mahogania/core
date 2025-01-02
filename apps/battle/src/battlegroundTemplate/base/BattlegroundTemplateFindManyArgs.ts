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
import { BattlegroundTemplateWhereInput } from "./BattlegroundTemplateWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BattlegroundTemplateOrderByInput } from "./BattlegroundTemplateOrderByInput";

@ArgsType()
class BattlegroundTemplateFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BattlegroundTemplateWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BattlegroundTemplateWhereInput, { nullable: true })
  @Type(() => BattlegroundTemplateWhereInput)
  where?: BattlegroundTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: [BattlegroundTemplateOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BattlegroundTemplateOrderByInput], { nullable: true })
  @Type(() => BattlegroundTemplateOrderByInput)
  orderBy?: Array<BattlegroundTemplateOrderByInput>;

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

export { BattlegroundTemplateFindManyArgs as BattlegroundTemplateFindManyArgs };