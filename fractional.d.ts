declare module 'fractional' {
    export class Fraction {
      numerator: number;
      denominator: number;
      constructor(numerator: number | string, denominator?: number);
      add(fraction: Fraction): Fraction;
      subtract(fraction: Fraction): Fraction;
      multiply(fraction: Fraction): Fraction;
      divide(fraction: Fraction): Fraction;
      valueOf(): number;
      toString(): string;
    }
  }
  
