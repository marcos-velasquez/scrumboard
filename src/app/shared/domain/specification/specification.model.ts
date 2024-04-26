import { ISpecification } from './specification.interface';

export abstract class Specification<T> implements ISpecification<T> {
  public abstract isSatisfiedBy(candidate: T): boolean;

  public and(other: ISpecification<T>): ISpecification<T> {
    return new AndSpecification(this, other);
  }

  public andNot(other: ISpecification<T>): ISpecification<T> {
    return new AndNotSpecification(this, other);
  }

  public or(other: ISpecification<T>): ISpecification<T> {
    return new OrSpecification(this, other);
  }

  public orNot(other: ISpecification<T>): ISpecification<T> {
    return new OrNotSpecification(this, other);
  }

  public not(): ISpecification<T> {
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
  public isSatisfiedBy(_: T): boolean {
    return true;
  }
}
