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
import { CreatureQuestEnderWhereInput } from "./CreatureQuestEnderWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CreatureQuestEnderOrderByInput } from "./CreatureQuestEnderOrderByInput";

@ArgsType()
class CreatureQuestEnderFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CreatureQuestEnderWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CreatureQuestEnderWhereInput, { nullable: true })
  @Type(() => CreatureQuestEnderWhereInput)
  where?: CreatureQuestEnderWhereInput;

  @ApiProperty({
    required: false,
    type: [CreatureQuestEnderOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CreatureQuestEnderOrderByInput], { nullable: true })
  @Type(() => CreatureQuestEnderOrderByInput)
  orderBy?: Array<CreatureQuestEnderOrderByInput>;

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

export { CreatureQuestEnderFindManyArgs as CreatureQuestEnderFindManyArgs };
