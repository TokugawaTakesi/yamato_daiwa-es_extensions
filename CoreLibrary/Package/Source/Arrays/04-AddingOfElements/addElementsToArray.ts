import isNaturalNumberOrZero from "../../TypeGuards/Numbers/isNaturalNumberOrZero";
import isNaturalNumber from "../../TypeGuards/Numbers/isNaturalNumber";
import Logger from "../../Logging/Logger";
import InvalidParameterValueError from "../../Errors/InvalidParameterValue/InvalidParameterValueError";


export default function addElementsToArray<ArrayElement>(
  compoundParameter:
      Readonly<
        { newElements: ReadonlyArray<ArrayElement>; } &
        (
          {
            mutably: true;
            targetArray: Array<ArrayElement>;
          } |
          {
            mutably: false;
            targetArray: ReadonlyArray<ArrayElement>;
          }
        ) &
        (
          {
            toStart: true;
            toEnd?: undefined;
            toPosition__numerationFrom0?: undefined;
            toPosition__numerationFrom1?: undefined;
          } |
          {
            toEnd: true;
            toStart?: undefined;
            toPosition__numerationFrom0?: undefined;
            toPosition__numerationFrom1?: undefined;
          } |
          {
            toPosition__numerationFrom0: number;
            toStart?: undefined;
            toEnd?: undefined;
            toPosition__numerationFrom1?: undefined;
          } |
          {
            toPosition__numerationFrom1: number;
            toStart?: undefined;
            toEnd?: undefined;
            toPosition__numerationFrom0?: undefined;
          }
        )
      >
): Array<ArrayElement> {

  const workpiece: Array<ArrayElement> = compoundParameter.mutably ?
      compoundParameter.targetArray : [ ...compoundParameter.targetArray ];

  if ("toStart" in compoundParameter) {
    workpiece.unshift(...compoundParameter.newElements);
    return workpiece;
  }


  if ("toEnd" in compoundParameter) {
    workpiece.push(...compoundParameter.newElements);
    return workpiece;
  }


  let positionOfFirstNewElement__numerationFrom0: number;

  if (isNaturalNumberOrZero(compoundParameter.toPosition__numerationFrom0)) {
    positionOfFirstNewElement__numerationFrom0 = compoundParameter.toPosition__numerationFrom0;
  } else if (isNaturalNumber(compoundParameter.toPosition__numerationFrom1)) {
    positionOfFirstNewElement__numerationFrom0 = compoundParameter.toPosition__numerationFrom1 - 1;
  } else {
    Logger.throwErrorAndLog({
      errorInstance: new InvalidParameterValueError({
        parameterNumber: 1,
        parameterName: "compoundParameter",
        messageSpecificPart:
            "The target position has been incorrectly specified. " +
            "The valid alternatives are:\n" +
            "● \"toStart\": must be the boolean herewith \"true\" only\n" +
            "● \"toEnd\": must be the boolean herewith \"true\" only\n" +
            "● \"toPosition__numerationFrom0\": must be the natural number or zero\n" +
            "● \"toPosition__numerationFrom1\": must be the natural number"
      }),
      title: InvalidParameterValueError.localization.defaultTitle,
      occurrenceLocation: "addElementsToArray(compoundParameter)"
    });
  }

  workpiece.splice(positionOfFirstNewElement__numerationFrom0, 0, ...compoundParameter.newElements);

  return workpiece;

}