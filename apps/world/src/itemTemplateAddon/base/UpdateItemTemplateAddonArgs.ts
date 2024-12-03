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
import { ItemTemplateAddonWhereUniqueInput } from "./ItemTemplateAddonWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ItemTemplateAddonUpdateInput } from "./ItemTemplateAddonUpdateInput";

@ArgsType()
class UpdateItemTemplateAddonArgs {
  @ApiProperty({
    required: true,
    type: () => ItemTemplateAddonWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ItemTemplateAddonWhereUniqueInput)
  @Field(() => ItemTemplateAddonWhereUniqueInput, { nullable: false })
  where!: ItemTemplateAddonWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ItemTemplateAddonUpdateInput,
  })
  @ValidateNested()
  @Type(() => ItemTemplateAddonUpdateInput)
  @Field(() => ItemTemplateAddonUpdateInput, { nullable: false })
  data!: ItemTemplateAddonUpdateInput;
}

export { UpdateItemTemplateAddonArgs as UpdateItemTemplateAddonArgs };
