import { useUserStore } from '@/store/useUserStore';
import { useNavigate, useParams } from 'react-router-dom';

const TimeOverModal = () => {
  const { user } = useUserStore();
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div className="absolute bg-slate-300">
      <p>앗 답변 시간이 종료되었어요.</p>
      <p>
        아쉽게도 완료하지 않은 답변은 <br />
        {user.name}에게 전달되지 않아요
      </p>
      <button type="button" onClick={() => navigate(`/${params.id}/result`)}>
        결과 확인하기
      </button>
    </div>
  );
};

export default TimeOverModal;
