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
import { ProspectingLootTemplateWhereInput } from "./ProspectingLootTemplateWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ProspectingLootTemplateOrderByInput } from "./ProspectingLootTemplateOrderByInput";

@ArgsType()
class ProspectingLootTemplateFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProspectingLootTemplateWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ProspectingLootTemplateWhereInput, { nullable: true })
  @Type(() => ProspectingLootTemplateWhereInput)
  where?: ProspectingLootTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: [ProspectingLootTemplateOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ProspectingLootTemplateOrderByInput], { nullable: true })
  @Type(() => ProspectingLootTemplateOrderByInput)
  orderBy?: Array<ProspectingLootTemplateOrderByInput>;

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

export { ProspectingLootTemplateFindManyArgs as ProspectingLootTemplateFindManyArgs };
