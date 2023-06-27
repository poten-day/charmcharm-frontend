type ShareURLProps = { url: string };

const ShareURL = ({ url }: ShareURLProps) => {
  const onClickShare = async (url: string) => {
    if (navigator.share) {
      await navigator.share({ title: 'CharmCharm', url });
      alert('복사되었습니다!');
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      alert('링크가 클립보드에 복사되었습니다!');
    } else {
      alert('어느 브라우저에서 발생한 오류인지 말해주세요🥹');
    }
  };

  return (
    <div>
      <input type="text" defaultValue={`${url}`} disabled />
      <button type="button" onClick={() => onClickShare(url)}>
        공유
      </button>
    </div>
  );
};

export default ShareURL;
