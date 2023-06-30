import { AnswersResultCountType, AnswersSubQuestionType } from '@/api/types';

const SubResult = ({ data }: { data: AnswersSubQuestionType[] }) => {
  const helper = (answers: AnswersResultCountType[]) => {
    return answers
      .map((answer) => {
        return `${answer.answerName}(${answer.answerCount}명)`;
      })
      .join(', ');
  };

  return (
    <div className="px-[20px] py-[32px] pb-[120px] bg-[#F8F8F8] text-gray500 flex flex-col gap-[20px]">
      <p>친구들의 답변 전체</p>
      {data.map((data, index) => (
        <div key={`answers-${data.questionId}`}>
          <p>
            {index + 1}. {data.questionTitle}
          </p>
          <div>
            <span>: {helper(data.answerResults)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubResult;
