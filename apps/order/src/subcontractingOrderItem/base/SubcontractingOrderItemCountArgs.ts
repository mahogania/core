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
import { SubcontractingOrderItemWhereInput } from "./SubcontractingOrderItemWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class SubcontractingOrderItemCountArgs {
  @ApiProperty({
    required: false,
    type: () => SubcontractingOrderItemWhereInput,
  })
  @Field(() => SubcontractingOrderItemWhereInput, { nullable: true })
  @Type(() => SubcontractingOrderItemWhereInput)
  where?: SubcontractingOrderItemWhereInput;
}

export { SubcontractingOrderItemCountArgs as SubcontractingOrderItemCountArgs };