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
import { PoolTemplateWhereUniqueInput } from "./PoolTemplateWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeletePoolTemplateArgs {
  @ApiProperty({
    required: true,
    type: () => PoolTemplateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PoolTemplateWhereUniqueInput)
  @Field(() => PoolTemplateWhereUniqueInput, { nullable: false })
  where!: PoolTemplateWhereUniqueInput;
}

export { DeletePoolTemplateArgs as DeletePoolTemplateArgs };