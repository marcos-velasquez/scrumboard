import { UseCase } from '../../../../core/application/base.usecase';
import { ScrumBoardRepository } from '../../domain/scrumboard.repository';
import { ScrumBoard } from '../../domain/scrumboard.model';

export class FindScrumBoardsUseCase extends UseCase<void, ScrumBoard[]> {
  constructor(private readonly scrumBoardRepository: ScrumBoardRepository) {
    super();
  }

  public async execute(): Promise<ScrumBoard[]> {
    return this.scrumBoardRepository.getAll();
  }
}
