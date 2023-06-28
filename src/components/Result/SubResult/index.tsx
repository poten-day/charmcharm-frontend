import { AnswersSubQuestionType } from '@/api/types';

const SubResult = ({ data }: { data: AnswersSubQuestionType[] }) => {
  return (
    <div>
      <p>친구들의 답변 전체</p>
      {data.map((data) => (
        <div key={`answers-${data.questionId}`}>
          <p>{data.questionTitle}</p>
          {data.answerResults.map((result) => (
            <span key={`${result.answerId}-${result.answerName}`}>
              {result.answerName}({result.answerCount}명)
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SubResult;
