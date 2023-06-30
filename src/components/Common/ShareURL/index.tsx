import useShareURL from '@/hooks/useShareURL';
import { ReactComponent as Share } from '#/assets/images/icons/solar-share-linear.svg';
import { memo } from 'react';

type ShareURLProps = { url: string };

const ShareURL = ({ url }: ShareURLProps) => {
  const { executeShareURL } = useShareURL();
  return (
    <div className="flex gap-[12px] max-w-[480px]">
      <input
        type="text"
        defaultValue={url}
        disabled
        className="w-full p-[16px] rounded-[6px] border border-gray200 disabled:bg-white"
      />
      <button
        type="button"
        onClick={() => executeShareURL(url)}
        className="bg-gray200 p-[14px] rounded-[6px]"
      >
        <Share className="w-[28px] h-[28px] stroke-gray900" />
      </button>
    </div>
  );
};

export default memo(ShareURL);
