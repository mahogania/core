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
import { MillingLootTemplateWhereUniqueInput } from "./MillingLootTemplateWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MillingLootTemplateUpdateInput } from "./MillingLootTemplateUpdateInput";

@ArgsType()
class UpdateMillingLootTemplateArgs {
  @ApiProperty({
    required: true,
    type: () => MillingLootTemplateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MillingLootTemplateWhereUniqueInput)
  @Field(() => MillingLootTemplateWhereUniqueInput, { nullable: false })
  where!: MillingLootTemplateWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MillingLootTemplateUpdateInput,
  })
  @ValidateNested()
  @Type(() => MillingLootTemplateUpdateInput)
  @Field(() => MillingLootTemplateUpdateInput, { nullable: false })
  data!: MillingLootTemplateUpdateInput;
}

export { UpdateMillingLootTemplateArgs as UpdateMillingLootTemplateArgs };