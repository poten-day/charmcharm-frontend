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
  maxAnswerCount: number;
}

export interface CharmersQuestionType {
  name: string;
  questionForms: CharmersQuestionFormType[];
}
