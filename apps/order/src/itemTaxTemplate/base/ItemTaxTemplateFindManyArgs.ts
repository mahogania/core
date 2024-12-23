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
import { ItemTaxTemplateWhereInput } from "./ItemTaxTemplateWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ItemTaxTemplateOrderByInput } from "./ItemTaxTemplateOrderByInput";

@ArgsType()
class ItemTaxTemplateFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ItemTaxTemplateWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ItemTaxTemplateWhereInput, { nullable: true })
  @Type(() => ItemTaxTemplateWhereInput)
  where?: ItemTaxTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: [ItemTaxTemplateOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ItemTaxTemplateOrderByInput], { nullable: true })
  @Type(() => ItemTaxTemplateOrderByInput)
  orderBy?: Array<ItemTaxTemplateOrderByInput>;

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

export { ItemTaxTemplateFindManyArgs as ItemTaxTemplateFindManyArgs };
