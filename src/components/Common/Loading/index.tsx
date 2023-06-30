import Lottie from 'lottie-react';
import LottieLoading from '@/assets/loading-3dots.json';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen gap-4">
      <Lottie animationData={LottieLoading} />
    </div>
  );
};

export default Loading;
