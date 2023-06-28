import useShareURL from '@/hooks/useShareURL';

type ShareURLProps = { url: string };

const ShareURL = ({ url }: ShareURLProps) => {
  const { executeShareURL } = useShareURL();
  return (
    <div>
      <input type="text" defaultValue={`${url}`} disabled />
      <button type="button" onClick={() => executeShareURL(url)}>
        공유
      </button>
    </div>
  );
};

export default ShareURL;
