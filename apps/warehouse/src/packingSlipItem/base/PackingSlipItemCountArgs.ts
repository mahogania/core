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
import { PackingSlipItemWhereInput } from "./PackingSlipItemWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class PackingSlipItemCountArgs {
  @ApiProperty({
    required: false,
    type: () => PackingSlipItemWhereInput,
  })
  @Field(() => PackingSlipItemWhereInput, { nullable: true })
  @Type(() => PackingSlipItemWhereInput)
  where?: PackingSlipItemWhereInput;
}

export { PackingSlipItemCountArgs as PackingSlipItemCountArgs };