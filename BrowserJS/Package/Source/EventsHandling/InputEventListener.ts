import {
  Logger,
  DOM_ElementRetrievingFailedError,
  UnexpectedEventError,
  isUndefined
} from "@yamato-daiwa/es-extensions";
import getExpectedToBeSingleDOM_Element from "../DOM/getExpectedToBeSingleDOM_Element";


class InputEventListener {

  protected readonly targetElements: ReadonlyArray<Element>;

  /* [ Theory ] A new function reference is created after `.bind()` is called, so the reference must be single. */
  protected readonly boundInternalHandler: (event: Event) => void;
  protected readonly externalHandler: (inputtedValue: string, inputEvent: Event, targetElement: Element) => void;

  protected readonly mustBeCalledOnce: boolean;
  protected readonly mustKeepDefaultBehaviour: boolean;


  /* [ Approach ]
   * Required additionally to constructor to avoid the ESLint's "no-new" error/waring when do not going to call the
   *   instance methods. */
  public static createAndAssign(
    initializationProperties: InputEventListener.InitializationProperties
  ): InputEventListener {
    return new InputEventListener(initializationProperties);
  }


  public constructor(
    {
      mustBeCalledOnce = false,
      mustKeepDefaultBehaviour = false,
      ...initializationProperties
    }: InputEventListener.InitializationProperties
  ) {

    let targetElements: ReadonlyArray<Element>;

    if (initializationProperties.targetElement instanceof Element) {

      targetElements = [ initializationProperties.targetElement ];

    } else {

      let matchesWithTargetSelector: NodeListOf<Element> | ReadonlyArray<Element>;
      let contextElement: ParentNode | Readonly<{ selector: string; }> | undefined;

      /* [ Theory ]
       * From the viewpoint of JavaScript, this part is redundant, but TypeScript does not see from the type definitions
       *   that if `targetElement` is not the instance of `Element`, the `contextElement` property could exist. */
      if ("contextElement" in initializationProperties) {
        contextElement = initializationProperties.contextElement;
      }


      if (isUndefined(contextElement)) {

        matchesWithTargetSelector = document.querySelectorAll(initializationProperties.targetElement.selector);

      } else if ("selector" in contextElement) {

        matchesWithTargetSelector = [ getExpectedToBeSingleDOM_Element({ selector: contextElement.selector }) ];

      } else {

        matchesWithTargetSelector = contextElement.querySelectorAll(initializationProperties.targetElement.selector);

      }


      if (matchesWithTargetSelector.length === 0) {

        Logger.logError({
          errorType: DOM_ElementRetrievingFailedError.NAME,
          title: DOM_ElementRetrievingFailedError.localization.defaultTitle,
          description: DOM_ElementRetrievingFailedError.localization.generateDescription({
            selector: initializationProperties.targetElement.selector
          }),
          occurrenceLocation: "InputEventListener.constructor(initializationProperties)"
        });

        targetElements = [];

      } else if (matchesWithTargetSelector.length === 1) {

        targetElements = [ matchesWithTargetSelector[0] ];

      } else if ("mustApplyToAllMatchesWithSelector" in initializationProperties) {

        targetElements = Array.from(matchesWithTargetSelector);

      } else {

        if ("mustExpectExactlyOneMatchingWithSelector" in initializationProperties) {

          Logger.logError({
            errorType: UnexpectedEventError.NAME,
            title: UnexpectedEventError.localization.defaultTitle,
            description:
                `Contrary to expectations, ${ matchesWithTargetSelector.length } matches has been found for ` +
                  `the selector "${ initializationProperties.targetElement.selector }". ` +
                "The subsequent matches will be ignored.",
            occurrenceLocation:
                "InputEventListener.createAndAssign(initializationProperties) -> constructor(initializationProperties)"
          });

        }

        targetElements = [ matchesWithTargetSelector[0] ];

      }

    }

    this.targetElements = targetElements;

    this.externalHandler = initializationProperties.handler;
    this.boundInternalHandler = this.onInput.bind(this);

    this.mustBeCalledOnce = mustBeCalledOnce;
    this.mustKeepDefaultBehaviour = mustKeepDefaultBehaviour;

    for (const targetElement of this.targetElements) {

      targetElement.addEventListener(
        "input",
        this.boundInternalHandler,
        { once: this.mustBeCalledOnce }
      );

    }

  }


  public utilize(): void {
    for (const targetElement of this.targetElements) {
      targetElement.removeEventListener("input", this.boundInternalHandler);
    }
  }


  private onInput(event: Event): void {

    if (!this.mustKeepDefaultBehaviour) {
      event.preventDefault();
    }


    for (const targetElement of this.targetElements) {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        this.externalHandler(event.target.value, event, targetElement);
      }
    }

  }

}

namespace InputEventListener {

  export type InitializationProperties = Readonly<
      (
        { targetElement: Element; } |
        (
          {
            targetElement: Readonly<
              { selector: string; } &
              (
                { mustApplyToAllMatchesWithSelector: true; } |
                { mustIgnoreSubsequentMatchesWithSelector: true; } |
                { mustExpectExactlyOneMatchingWithSelector: true; }
              )
            >;
          } &
          { contextElement?: ParentNode | Readonly<{ selector: string; }>; }
        )
      ) &
      {
        handler: (inputtedValue: string, inputEvent: Event, targetElement: Element) => unknown;
        mustBeCalledOnce?: boolean;
        mustKeepDefaultBehaviour?: boolean;
      }
  >;

}


export default InputEventListener;
