export default function addElementsToArrayImmutably<ArrayElement>(
  namedParameters:
    {
      targetArray: Array<ArrayElement>;
      newElements: Array<ArrayElement>;
    } &
    (
      { toStart: true; } |
      { toEnd: true; } |
      { toPosition__numerationFrom0: number; } |
      { toPosition__numerationFrom1: number; }
    )
): Array<ArrayElement> {

  const workpiece: Array<ArrayElement> = [ ...namedParameters.targetArray ];

  if ("toStart" in namedParameters) {
    workpiece.unshift(...namedParameters.newElements);
    return workpiece;
  }


  if ("toEnd" in namedParameters) {
    workpiece.push(...namedParameters.newElements);
    return workpiece;
  }


  const positionOfFirstNewElement__numerationFrom1: number = "toPosition__numerationFrom1" in namedParameters ?
      namedParameters.toPosition__numerationFrom1 : namedParameters.toPosition__numerationFrom0 + 1;


  workpiece.splice(positionOfFirstNewElement__numerationFrom1, 0, ...namedParameters.newElements);

  return workpiece;
}