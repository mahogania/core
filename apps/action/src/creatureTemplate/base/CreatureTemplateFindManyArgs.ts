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
import { CreatureTemplateWhereInput } from "./CreatureTemplateWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CreatureTemplateOrderByInput } from "./CreatureTemplateOrderByInput";

@ArgsType()
class CreatureTemplateFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CreatureTemplateWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CreatureTemplateWhereInput, { nullable: true })
  @Type(() => CreatureTemplateWhereInput)
  where?: CreatureTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: [CreatureTemplateOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CreatureTemplateOrderByInput], { nullable: true })
  @Type(() => CreatureTemplateOrderByInput)
  orderBy?: Array<CreatureTemplateOrderByInput>;

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

export { CreatureTemplateFindManyArgs as CreatureTemplateFindManyArgs };
