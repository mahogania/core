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
import { SkinningLootTemplateWhereInput } from "./SkinningLootTemplateWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SkinningLootTemplateOrderByInput } from "./SkinningLootTemplateOrderByInput";

@ArgsType()
class SkinningLootTemplateFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SkinningLootTemplateWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SkinningLootTemplateWhereInput, { nullable: true })
  @Type(() => SkinningLootTemplateWhereInput)
  where?: SkinningLootTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: [SkinningLootTemplateOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SkinningLootTemplateOrderByInput], { nullable: true })
  @Type(() => SkinningLootTemplateOrderByInput)
  orderBy?: Array<SkinningLootTemplateOrderByInput>;

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

export { SkinningLootTemplateFindManyArgs as SkinningLootTemplateFindManyArgs };
