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
import { PackingSlipItemWhereUniqueInput } from "./PackingSlipItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class PackingSlipItemFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => PackingSlipItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PackingSlipItemWhereUniqueInput)
  @Field(() => PackingSlipItemWhereUniqueInput, { nullable: false })
  where!: PackingSlipItemWhereUniqueInput;
}

export { PackingSlipItemFindUniqueArgs as PackingSlipItemFindUniqueArgs };
