import { AnswersResultType, CharmerResultsType } from '@/api/types';
import { ReactComponent as Background } from '#/assets/images/vactor/result-vactor.svg';
import { TagStyleConfig } from '@/utils/styleConfig';

const MainResult = ({ data }: { data: CharmerResultsType }) => {
  const { mainQuestions, name, hex } = data;
  const [title, color, respect, forMe] = mainQuestions;
  const [mainConcept, ...subConcept] = title.answerResults;

  const helper = (answers: AnswersResultType[]) => {
    return answers.map((answer) => `#${answer.answerName}`).join(' ');
  };

  return (
    <div className="flex flex-col text-center">
      <h1 className="text-h2 font-BRBA_B my-[24px] text-">
        친구들이 말하는 <br />
        <strong className={`text-[#5B89FF]`}>{name}</strong>의 매력은?
      </h1>
      <div className="relative">
        <Background className={`w-full fill-[#5B89FF]`} />
        <p className={`text-[#5B89FF] text-h2 font-BRBA_B absolute left-[50%] top-[50%]`}>
          {mainConcept.answerName}
        </p>
      </div>
      <p className={`text-[#5B89FF] text-h3 font-BRBA_B py-[12px]`}>{helper(subConcept)}</p>
      <p className={`py-[12px] bg-[#5B89FF] text-h3 font-BRBA_B text-white`}>
        이런 너를 생각하면 {color.answerResults[0].answerName}이 떠올라!
      </p>
      <ul className="py-[24px] px-[20px]">
        <li className="mb-[24px]">
          <p className="text-h3 font-BRBA_B mb-[12px]">친구들이 말하는 너는</p>
          {respect.answerResults.map((concept) => (
            <span
              key={`respect-${concept.answerId}`}
              className={`${TagStyleConfig.common} ${TagStyleConfig.checkbox}`}
            >
              {concept.answerName}
            </span>
          ))}
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

export default MainResult;
