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
import { ClosedDocumentWhereUniqueInput } from "./ClosedDocumentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ClosedDocumentUpdateInput } from "./ClosedDocumentUpdateInput";

@ArgsType()
class UpdateClosedDocumentArgs {
  @ApiProperty({
    required: true,
    type: () => ClosedDocumentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ClosedDocumentWhereUniqueInput)
  @Field(() => ClosedDocumentWhereUniqueInput, { nullable: false })
  where!: ClosedDocumentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ClosedDocumentUpdateInput,
  })
  @ValidateNested()
  @Type(() => ClosedDocumentUpdateInput)
  @Field(() => ClosedDocumentUpdateInput, { nullable: false })
  data!: ClosedDocumentUpdateInput;
}

export { UpdateClosedDocumentArgs as UpdateClosedDocumentArgs };
