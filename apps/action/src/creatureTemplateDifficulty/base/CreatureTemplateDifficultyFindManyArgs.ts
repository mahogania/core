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
import { CreatureTemplateDifficultyWhereInput } from "./CreatureTemplateDifficultyWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CreatureTemplateDifficultyOrderByInput } from "./CreatureTemplateDifficultyOrderByInput";

@ArgsType()
class CreatureTemplateDifficultyFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CreatureTemplateDifficultyWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CreatureTemplateDifficultyWhereInput, { nullable: true })
  @Type(() => CreatureTemplateDifficultyWhereInput)
  where?: CreatureTemplateDifficultyWhereInput;

  @ApiProperty({
    required: false,
    type: [CreatureTemplateDifficultyOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CreatureTemplateDifficultyOrderByInput], { nullable: true })
  @Type(() => CreatureTemplateDifficultyOrderByInput)
  orderBy?: Array<CreatureTemplateDifficultyOrderByInput>;

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

export { CreatureTemplateDifficultyFindManyArgs as CreatureTemplateDifficultyFindManyArgs };
