import { SubmitFeedbackUseCase } from "./submit-feedbacks-use-case"

// spies = espiões - saber se uma função foi chamada (create ou sendMail)
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe('Submit feedback', ()=>{

    it('should be able to submit a feedback', async()=>{
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,TEST'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    });

    it('should not be able to submit without type', async()=>{
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,TEST'
        })).rejects.toThrow();
    });

    it('should not be able to submit without comment', async()=>{
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,TEST'
        })).rejects.toThrow();
    });

    it('should not be able to submit without an invalid screenshot', async()=>{
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'test.jpg'
        })).rejects.toThrow();
    });

})