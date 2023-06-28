import MainResult from '../MainResult';
import SubResult from '../SubResult';

const ResultContainer = () => {
  return (
    <div>
      <MainResult />
      <SubResult />
      <div>
        <button>저장하기</button>
        <button>공유하기</button>
      </div>
    </div>
  );
};

export default ResultContainer;
