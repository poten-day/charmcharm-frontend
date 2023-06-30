const useShareURL = () => {
  const handleCopyClipBoard = (text: string) => {
    const dummyTextArea = document.createElement('textarea');
    document.body.appendChild(dummyTextArea);
    dummyTextArea.value = text;
    dummyTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(dummyTextArea);
  };

  const executeShareURL = async (url: string) => {
    if (navigator.share) {
      await navigator.share({ title: 'CharmCharm', url });
      alert('복사되었습니다!');
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      alert('링크가 클립보드에 복사되었습니다!');
    } else {
      handleCopyClipBoard(url);
      alert('링크가 클립보드에 복사되었습니다!');
    }
  };

  return { executeShareURL };
};

export default useShareURL;
