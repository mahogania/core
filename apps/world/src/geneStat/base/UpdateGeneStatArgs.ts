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
import { GeneStatWhereUniqueInput } from "./GeneStatWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { GeneStatUpdateInput } from "./GeneStatUpdateInput";

@ArgsType()
class UpdateGeneStatArgs {
  @ApiProperty({
    required: true,
    type: () => GeneStatWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GeneStatWhereUniqueInput)
  @Field(() => GeneStatWhereUniqueInput, { nullable: false })
  where!: GeneStatWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => GeneStatUpdateInput,
  })
  @ValidateNested()
  @Type(() => GeneStatUpdateInput)
  @Field(() => GeneStatUpdateInput, { nullable: false })
  data!: GeneStatUpdateInput;
}

export { UpdateGeneStatArgs as UpdateGeneStatArgs };