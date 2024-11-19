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
import { LinkedRespawnWhereUniqueInput } from "./LinkedRespawnWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { LinkedRespawnUpdateInput } from "./LinkedRespawnUpdateInput";

@ArgsType()
class UpdateLinkedRespawnArgs {
  @ApiProperty({
    required: true,
    type: () => LinkedRespawnWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LinkedRespawnWhereUniqueInput)
  @Field(() => LinkedRespawnWhereUniqueInput, { nullable: false })
  where!: LinkedRespawnWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => LinkedRespawnUpdateInput,
  })
  @ValidateNested()
  @Type(() => LinkedRespawnUpdateInput)
  @Field(() => LinkedRespawnUpdateInput, { nullable: false })
  data!: LinkedRespawnUpdateInput;
}

export { UpdateLinkedRespawnArgs as UpdateLinkedRespawnArgs };