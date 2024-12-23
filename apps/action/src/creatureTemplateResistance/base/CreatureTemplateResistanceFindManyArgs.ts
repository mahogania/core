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
import { CreatureTemplateResistanceWhereInput } from "./CreatureTemplateResistanceWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CreatureTemplateResistanceOrderByInput } from "./CreatureTemplateResistanceOrderByInput";

@ArgsType()
class CreatureTemplateResistanceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CreatureTemplateResistanceWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CreatureTemplateResistanceWhereInput, { nullable: true })
  @Type(() => CreatureTemplateResistanceWhereInput)
  where?: CreatureTemplateResistanceWhereInput;

  @ApiProperty({
    required: false,
    type: [CreatureTemplateResistanceOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CreatureTemplateResistanceOrderByInput], { nullable: true })
  @Type(() => CreatureTemplateResistanceOrderByInput)
  orderBy?: Array<CreatureTemplateResistanceOrderByInput>;

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

export { CreatureTemplateResistanceFindManyArgs as CreatureTemplateResistanceFindManyArgs };
