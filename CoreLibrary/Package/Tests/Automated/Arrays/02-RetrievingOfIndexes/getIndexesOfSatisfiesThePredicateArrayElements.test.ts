import { getIndexesOfSatisfiesThePredicateArrayElements, Logger } from "../../../../Source";
import { test } from "node:test";
import Assert from "assert";


type Product = { title: string; price: number; };

const sample: Array<Product> = [
  { title: "ALPHA", price: 100 },
  { title: "BRAVO", price: 500 },
  { title: "CHARLIE", price: 1000 },
  { title: "DELTA", price: 1500 }
];


test("Works as Intended", (): void => {

  Assert.deepStrictEqual(
    getIndexesOfSatisfiesThePredicateArrayElements(
      sample, (arrayElement: Product): boolean => arrayElement.price > 500
    ),
    [ 2, 3 ]
  );

  Assert.deepStrictEqual(
    getIndexesOfSatisfiesThePredicateArrayElements(
      sample, (arrayElement: Product): boolean => arrayElement.price > 1500
    ),
    []
  );

}).catch(Logger.logPromiseError);