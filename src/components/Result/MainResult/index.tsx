import { CharmerResultsType } from '@/api/types';

const MainResult = ({ data }: { data: CharmerResultsType }) => {
  const { mainQuestions, name, hex } = data;
  const [title, color, respect, forMe] = mainQuestions;
  const [mainConcept, ...subConcept] = title.answerResults;

  return (
    <div>
      <h1>
        친구들이 말하는 <br />
        <strong className={`text-[${hex}]`}>{name}</strong>의 매력은?
      </h1>
      <div className={`bg-[${hex}]`}>
        <p>{mainConcept.answerName}</p>
      </div>
      <div>
        {subConcept.map((concept) => (
          <span key={`concept-${concept.answerId}`} className={`text-[${hex}]`}>
            #{concept.answerName}
          </span>
        ))}
      </div>
      <p>이런 너를 생각하면 {color.answerResults[0].answerName}이 떠올라!</p>
      <ul>
        <li>
          <p>친구들이 말하는 너는</p>
          {respect.answerResults.map((concept) => (
            <span key={`respect-${concept.answerId}`}>{concept.answerName}</span>
          ))}
        </li>
        <li>
          <p>친구들에게 너는</p>
          <p>{forMe.answerResults[0].answerName}</p>
        </li>
      </ul>
    </div>
  );
};

export default MainResult;
