import { FeedbacksRepository } from "../repositories/feedbacks-repository";

export interface SubmitFeedbackUseCaseProps {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase {

    constructor(
        private feedbacksRepository: FeedbacksRepository,
    ) {}

    async execute(request: SubmitFeedbackUseCaseProps){
        const { type, comment, screenshot } = request;

    }
}