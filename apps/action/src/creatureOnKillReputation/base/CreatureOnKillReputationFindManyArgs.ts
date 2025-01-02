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
import { CreatureOnKillReputationWhereInput } from "./CreatureOnKillReputationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CreatureOnKillReputationOrderByInput } from "./CreatureOnKillReputationOrderByInput";

@ArgsType()
class CreatureOnKillReputationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CreatureOnKillReputationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CreatureOnKillReputationWhereInput, { nullable: true })
  @Type(() => CreatureOnKillReputationWhereInput)
  where?: CreatureOnKillReputationWhereInput;

  @ApiProperty({
    required: false,
    type: [CreatureOnKillReputationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CreatureOnKillReputationOrderByInput], { nullable: true })
  @Type(() => CreatureOnKillReputationOrderByInput)
  orderBy?: Array<CreatureOnKillReputationOrderByInput>;

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

export { CreatureOnKillReputationFindManyArgs as CreatureOnKillReputationFindManyArgs };