export const MOCK_QUESTIONS = {
  name: 'dobby',
  questionForms: [
    {
      id: 1,
      questionTitle: '내가 생각하는 dobby의 매력은?',
      answers: [
        {
          id: 0,
          description: '따뜻한',
        },
        {
          id: 1,
          description: '세련된',
        },
        {
          id: 2,
          description: '성숙한',
        },
        {
          id: 3,
          description: '순수한',
        },
        {
          id: 4,
          description: '중후한',
        },
        {
          id: 5,
          description: '쾌활한',
        },
        {
          id: 6,
          description: '캐쥬얼한',
        },
        {
          id: 7,
          description: '부드러운',
        },
        {
          id: 8,
          description: '시크한',
        },
        {
          id: 9,
          description: '다정한',
        },
        {
          id: 10,
          description: '굳센',
        },
        {
          id: 11,
          description: '귀여운',
        },
        {
          id: 12,
          description: '우아한',
        },
        {
          id: 13,
          description: '차분한',
        },
        {
          id: 14,
          description: '지적인',
        },
        {
          id: 15,
          description: '깨끗한',
        },
        {
          id: 16,
          description: '투명한',
        },
        {
          id: 17,
          description: '다채로운',
        },
        {
          id: 18,
          description: '로맨틱한',
        },
        {
          id: 19,
          description: '스포티한',
        },
        {
          id: 20,
          description: '총명한',
        },
        {
          id: 21,
          description: '고요한',
        },
        {
          id: 22,
          description: '발랄한',
        },
        {
          id: 23,
          description: '조용한',
        },
        {
          id: 24,
          description: '따뜻한',
        },
        {
          id: 25,
          description: '세련된',
        },
        {
          id: 26,
          description: '성숙한',
        },
      ],
      isSingleChoice: false,
      minAnswerCount: 3,
    },
    {
      id: 2,
      questionTitle: 'dobby를 생각하면 떠오르는 색깔은?',
      answers: [
        {
          id: 0,
          description: '\uD83C\uDF39 빨간색',
        },
        {
          id: 1,
          description: '\uD83C\uDF4A 주황색',
        },
        {
          id: 2,
          description: '\uD83C\uDF4B 노란색',
        },
        {
          id: 3,
          description: '\uD83C\uDF4F 초록색',
        },
        {
          id: 4,
          description: '\uD83E\uDD8B 파란색',
        },
        {
          id: 5,
          description: '❄️ 하늘색',
        },
        {
          id: 6,
          description: '\uD83C\uDF51 핑크색',
        },
        {
          id: 7,
          description: '\uD83C\uDF29 흰색',
        },
        {
          id: 8,
          description: '\uD83C\uDFB1 검은색',
        },
      ],
      isSingleChoice: true,
      minAnswerCount: 1,
    },
    {
      id: 3,
      questionTitle: '나에게 dobby는?',
      answers: [
        {
          id: 0,
          description: '밤에 전화하고 싶은 사람',
        },
        {
          id: 1,
          description: '벚꽃 같이 보러가고 싶은 사람',
        },
        {
          id: 2,
          description: '롯데월드 같이 가고 싶은 사람',
        },
        {
          id: 3,
          description: '밤에 전화하고 싶은 사람',
        },
        {
          id: 4,
          description: '벚꽃 같이 보러가고 싶은 사람',
        },
        {
          id: 5,
          description: '롯데월드 같이 가고 싶은 사람',
        },
        {
          id: 6,
          description: '밤에 전화하고 싶은 사람',
        },
        {
          id: 7,
          description: '벚꽃 같이 보러가고 싶은 사람',
        },
        {
          id: 8,
          description: '롯데월드 같이 가고 싶은 사람',
        },
      ],
      isSingleChoice: true,
      minAnswerCount: 1,
    },
  ],
};

export const MOCK_RESULTS = {
  name: '도비',
  hex: '#5B89FF',
  mainQuestions: [
    {
      questionId: 1,
      questionTitle: '내가 생각하는 도비의 장점은?',
      answerResults: [
        {
          answerId: 7,
          answerName: '꼼꼼한',
        },
        {
          answerId: 10,
          answerName: '카리스마',
        },
        {
          answerId: 12,
          answerName: '잘 웃는',
        },
      ],
    },
    {
      questionId: 2,
      questionTitle: '도비를 생각하면 떠오르는 색깔은?',
      answerResults: [
        {
          answerId: 4,
          answerName: '\uD83E\uDD8B 파란색',
        },
      ],
    },
    {
      questionId: 3,
      questionTitle: '도비의 능력 중 부러운 것은?',
      answerResults: [
        {
          answerId: 4,
          answerName: '\uD83D\uDC84메이크업',
        },
        {
          answerId: 1,
          answerName: '\uD83C\uDFA8그림 천재',
        },
        {
          answerId: 11,
          answerName: '\uD83C\uDF73요리왕',
        },
      ],
    },
    {
      questionId: 4,
      questionTitle: '나에게 도비란?',
      answerResults: [
        {
          answerId: 5,
          answerName: '\uD83E\uDD38‍♀️같이 유튜브 찍고 싶은 사람',
        },
      ],
    },
  ],
  subQuestions: [
    {
      questionId: 1,
      questionTitle: '내가 생각하는 도비의 장점은?',
      answerResults: [
        {
          answerId: 7,
          answerName: '꼼꼼한',
          answerCount: 2,
        },
        {
          answerId: 10,
          answerName: '카리스마',
          answerCount: 2,
        },
        {
          answerId: 12,
          answerName: '잘 웃는',
          answerCount: 2,
        },
        {
          answerId: 15,
          answerName: '리더십 있는',
          answerCount: 2,
        },
        {
          answerId: 1,
          answerName: '인싸인',
          answerCount: 1,
        },
        {
          answerId: 4,
          answerName: '자신감 있는',
          answerCount: 1,
        },
        {
          answerId: 13,
          answerName: '성실한',
          answerCount: 1,
        },
        {
          answerId: 16,
          answerName: '자유로운',
          answerCount: 1,
        },
        {
          answerId: 6,
          answerName: '똑똑한',
          answerCount: 1,
        },
        {
          answerId: 11,
          answerName: '솔직한',
          answerCount: 1,
        },
      ],
    },
    {
      questionId: 2,
      questionTitle: '도비를 생각하면 떠오르는 색깔은?',
      answerResults: [
        {
          answerId: 4,
          answerName: '\uD83E\uDD8B 파란색',
          answerCount: 1,
        },
        {
          answerId: 3,
          answerName: '\uD83C\uDF4F 초록색',
          answerCount: 1,
        },
        {
          answerId: 2,
          answerName: '\uD83C\uDF4B 노란색',
          answerCount: 1,
        },
      ],
    },
    {
      questionId: 3,
      questionTitle: '도비의 능력 중 부러운 것은?',
      answerResults: [
        {
          answerId: 4,
          answerName: '\uD83D\uDC84메이크업',
          answerCount: 2,
        },
        {
          answerId: 1,
          answerName: '\uD83C\uDFA8그림 천재',
          answerCount: 2,
        },
        {
          answerId: 11,
          answerName: '\uD83C\uDF73요리왕',
          answerCount: 1,
        },
        {
          answerId: 16,
          answerName: '\uD83D\uDD0A말빨',
          answerCount: 1,
        },
        {
          answerId: 17,
          answerName: '\uD83D\uDC55패션왕',
          answerCount: 1,
        },
        {
          answerId: 6,
          answerName: '\uD83C\uDFAE게임스킬',
          answerCount: 1,
        },
        {
          answerId: 9,
          answerName: '\uD83D\uDCF7프사메이커',
          answerCount: 1,
        },
        {
          answerId: 12,
          answerName: '\uD83D\uDC51타고난회장감',
          answerCount: 1,
        },
        {
          answerId: 7,
          answerName: '\uD83D\uDC6F‍♀️친화력',
          answerCount: 1,
        },
        {
          answerId: 13,
          answerName: '\uD83C\uDFB5목소리',
          answerCount: 1,
        },
      ],
    },
    {
      questionId: 4,
      questionTitle: '나에게 도비란?',
      answerResults: [
        {
          answerId: 5,
          answerName: '\uD83E\uDD38‍♀️같이 유튜브 찍고 싶은 사람',
          answerCount: 1,
        },
        {
          answerId: 8,
          answerName: '\uD83C\uDFA4노래방 듀엣하고 싶은 사람',
          answerCount: 1,
        },
        {
          answerId: 4,
          answerName: '\uD83D\uDE25힘들 때 생각나는 사람',
          answerCount: 1,
        },
      ],
    },
  ],
};
