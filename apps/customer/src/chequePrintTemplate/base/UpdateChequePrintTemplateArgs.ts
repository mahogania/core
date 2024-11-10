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
import { ChequePrintTemplateWhereUniqueInput } from "./ChequePrintTemplateWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ChequePrintTemplateUpdateInput } from "./ChequePrintTemplateUpdateInput";

@ArgsType()
class UpdateChequePrintTemplateArgs {
  @ApiProperty({
    required: true,
    type: () => ChequePrintTemplateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ChequePrintTemplateWhereUniqueInput)
  @Field(() => ChequePrintTemplateWhereUniqueInput, { nullable: false })
  where!: ChequePrintTemplateWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ChequePrintTemplateUpdateInput,
  })
  @ValidateNested()
  @Type(() => ChequePrintTemplateUpdateInput)
  @Field(() => ChequePrintTemplateUpdateInput, { nullable: false })
  data!: ChequePrintTemplateUpdateInput;
}

export { UpdateChequePrintTemplateArgs as UpdateChequePrintTemplateArgs };
