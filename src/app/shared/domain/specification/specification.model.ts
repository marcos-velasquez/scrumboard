import { ISpecification } from './specification.interface';

export abstract class Specification<T> implements ISpecification<T> {
  abstract isSatisfiedBy(candidate: T): boolean;

  and(other: ISpecification<T>): ISpecification<T> {
    return new AndSpecification(this, other);
  }

  andNot(other: ISpecification<T>): ISpecification<T> {
    return new AndNotSpecification(this, other);
  }

  or(other: ISpecification<T>): ISpecification<T> {
    return new OrSpecification(this, other);
  }

  orNot(other: ISpecification<T>): ISpecification<T> {
    return new OrNotSpecification(this, other);
  }

  not(): ISpecification<T> {
    return new NotSpecification(this);
  }
}

export class AndSpecification<T> extends Specification<T> {
  constructor(private leftCondition: ISpecification<T>, private rightCondition: ISpecification<T>) {
    super();
  }

  public isSatisfiedBy(candidate: T): boolean {
    return this.leftCondition.isSatisfiedBy(candidate) && this.rightCondition.isSatisfiedBy(candidate);
  }
}

export class AndNotSpecification<T> extends Specification<T> {
  constructor(private leftCondition: ISpecification<T>, private rightCondition: ISpecification<T>) {
    super();
  }

  public isSatisfiedBy(candidate: T): boolean {
    return this.leftCondition.isSatisfiedBy(candidate) && this.rightCondition.isSatisfiedBy(candidate) !== true;
  }
}

export class OrSpecification<T> extends Specification<T> {
  constructor(private leftCondition: ISpecification<T>, private rightCondition: ISpecification<T>) {
    super();
  }

  public isSatisfiedBy(candidate: T): boolean {
    return this.leftCondition.isSatisfiedBy(candidate) || this.rightCondition.isSatisfiedBy(candidate);
  }
}

export class OrNotSpecification<T> extends Specification<T> {
  constructor(private leftCondition: ISpecification<T>, private rightCondition: ISpecification<T>) {
    super();
  }

  public isSatisfiedBy(candidate: T): boolean {
    return this.leftCondition.isSatisfiedBy(candidate) || this.rightCondition.isSatisfiedBy(candidate) !== true;
  }
}

export class NotSpecification<T> extends Specification<T> {
  constructor(private wrapped: ISpecification<T>) {
    super();
  }

  public isSatisfiedBy(candidate: T): boolean {
    return !this.wrapped.isSatisfiedBy(candidate);
  }
}

export class TrueSpecification<T> extends Specification<T> {
  constructor() {
    super();
  }
  isSatisfiedBy(_: T): boolean {
    console.log('true', _);
    return true;
  }
}
