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
      if (
        navigator.userAgent.toLowerCase().indexOf('kakaotalk') >= 0 ||
        navigator.userAgent.toLowerCase().indexOf('android') >= 0
      ) {
        alert('카카오톡 인앱에서는 작동이 안될 수 있습니다.\r\n모바일 브라우저를 이용해주세요.');
      }

      handleCopyClipBoard(url);
      alert('링크가 클립보드에 복사되었습니다!');
    }
  };

  return { executeShareURL };
};

export default useShareURL;
