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
import { ClreDedVlutPdlWhereUniqueInput } from "./ClreDedVlutPdlWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteClreDedVlutPdlArgs {
  @ApiProperty({
    required: true,
    type: () => ClreDedVlutPdlWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ClreDedVlutPdlWhereUniqueInput)
  @Field(() => ClreDedVlutPdlWhereUniqueInput, { nullable: false })
  where!: ClreDedVlutPdlWhereUniqueInput;
}

export { DeleteClreDedVlutPdlArgs as DeleteClreDedVlutPdlArgs };
