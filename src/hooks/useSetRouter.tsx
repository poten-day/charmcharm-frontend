import { useNavigate, useParams } from 'react-router-dom';

const useSetRouter = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const routerHelper = {
    main: function () {
      navigate('/');
    },
    id: function () {
      navigate(`${id}`);
    },
    form: function () {
      navigate(`/${id}/form`);
    },
    success: function () {
      navigate(`/${id}/form/success`);
    },
    result: function () {
      navigate(`/${id}/result`);
    },
  };

  return { id, routerHelper };
};

export default useSetRouter;
