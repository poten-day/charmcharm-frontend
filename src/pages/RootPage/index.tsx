import StartForm from '@/components/StartForm';

const RootPage = () => {
  return (
    <>
      <img
        className="absolute"
        src="/assets/images/logo/smlogo-white.svg"
        alt="참참 로고"
        width={480}
        height={72}
      />
      <img src="/assets/images/main.png" alt="나의 매력을 알려줘" width={480} height={500} />
      <StartForm />
    </>
  );
};

export default RootPage;
