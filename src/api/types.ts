export interface CharmersDefaultType {
  name: string;
  openTime: string;
  shareLink: string;
}

export interface CharmersExtendsType extends CharmersDefaultType {
  finished: boolean;
}

export interface CharmersQuestionAnswersType {
  id: number;
  description: string;
}

export interface CharmersQuestionFormType {
  id: number;
  questionTitle: string;
  answers: CharmersQuestionAnswersType[];
  minAnswerCount: number;
  isSingleChoice: boolean;
}

export interface CharmersQuestionType {
  name: string;
  questionForms: CharmersQuestionFormType[];
}

export interface AnswersResultType {
  answerCount: number;
  answerId: number;
  answerName: string;
}
export interface CharmerResultsType {
  name: boolean;
  results: {
    answerResults: AnswersResultType[];
    questionId: number;
    questionTitle: string;
  }[];
}
