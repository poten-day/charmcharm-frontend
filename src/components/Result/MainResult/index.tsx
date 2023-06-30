import { AnswersResultType, CharmerResultsType } from '@/api/types';
import { ReactComponent as Background } from '#/assets/images/vactor/result-vactor.svg';
import { TagStyleConfig } from '@/utils/styleConfig';
import { ForwardedRef, forwardRef } from 'react';

interface MainResultProps {
  data: CharmerResultsType;
}

const MainResult = (props: MainResultProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { mainQuestions, name, hex } = props.data;
  const [title, color, respect, forMe] = mainQuestions;
  const [mainConcept, ...subConcept] = title.answerResults;

  const helper = (answers: AnswersResultType[]) => {
    return answers.map((answer) => `#${answer.answerName}`).join(' ');
  };

  return (
    <div className="flex flex-col text-center bg-white" ref={ref}>
      <h1 className="text-h2 font-BRBA_B my-[24px]">
        친구들이 말하는 <br />
        <strong style={{ color: `${hex}` }}>{name}</strong>의 매력은?
      </h1>
      <div className="relative">
        <Background className="w-full h-auto" style={{ fill: `${hex}` }} />
        <p
          className="absolute transform -translate-x-1/2 -translate-y-1/2 text-h2 font-BRBA_B top-1/2 left-1/2"
          style={{ color: `${hex}` }}
        >
          {mainConcept.answerName}
        </p>
      </div>
      <p className="text-h3 font-BRBA_B py-[12px]" style={{ color: `${hex}` }}>
        {helper(subConcept)}
      </p>
      <p className="py-[12px] text-h3 font-BRBA_B text-white" style={{ backgroundColor: `${hex}` }}>
        이런 너를 생각하면 {color.answerResults[0].answerName}이 떠올라!
      </p>
      <ul className="py-[24px] px-[20px]">
        <li className="mb-[24px]">
          <p className="text-h3 font-BRBA_B mb-[12px]">친구들이 말하는 너는</p>
          <div className="flex justify-center gap-[8px]">
            {respect.answerResults.map((concept) => (
              <span
                key={`respect-${concept.answerId}`}
                className={`${TagStyleConfig.common} ${TagStyleConfig.checkbox}`}
              >
                {concept.answerName}
              </span>
            ))}
          </div>
        </li>
        <li>
          <p className="text-h3 font-BRBA_B mb-[12px]">친구들에게 너는</p>
          <p className={`${TagStyleConfig.common} ${TagStyleConfig.radio}`}>
            {forMe.answerResults[0].answerName}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default forwardRef<HTMLDivElement, MainResultProps>(MainResult);
