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
import { DesignationWhereInput } from "./DesignationWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class DesignationCountArgs {
  @ApiProperty({
    required: false,
    type: () => DesignationWhereInput,
  })
  @Field(() => DesignationWhereInput, { nullable: true })
  @Type(() => DesignationWhereInput)
  where?: DesignationWhereInput;
}

export { DesignationCountArgs as DesignationCountArgs };
