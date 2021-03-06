import calcPoints from './ScoreService';

describe('Score Service', () => {
  const listOfMatches = [
    {
      id: '1',
      goalsHomeTeam: 2,
      goalsAwayTeam: 1,
    },
    {
      id: '2',
      goalsHomeTeam: 2,
      goalsAwayTeam: 1,
    },
    {
      id: '3',
      goalsHomeTeam: 3,
      goalsAwayTeam: 3,
    },
    {
      id: '4',
      goalsHomeTeam: null,
      goalsAwayTeam: null,
    },
  ];

  const listOfBets = [
    {
      id: '1',
      match: '1',
      goalsHomeTeam: 2,
      goalsAwayTeam: 1,
    },
    {
      id: '2',
      match: '2',
      goalsHomeTeam: 1,
      goalsAwayTeam: 0,
    },
    {
      id: '3',
      match: '3',
      goalsHomeTeam: 2,
      goalsAwayTeam: 1,
    },
    {
      id: '4',
      match: '4',
      goalsHomeTeam: 2,
      goalsAwayTeam: 2,
    },
  ];

  it('should return 3 points for one win with goals, one win without goals and one loss', () => {
    expect(calcPoints(listOfMatches, listOfBets)).toEqual(3);
  });

  it('should return 1 point when bet is correct, but goals not', () => {
    expect(calcPoints([{
      id: '1',
      goalsHomeTeam: 2,
      goalsAwayTeam: 1,
    }], [{
      id: '1',
      match: '1',
      goalsHomeTeam: 1,
      goalsAwayTeam: 0,
    }])).toEqual(1);
    expect(calcPoints([{
      id: '1',
      goalsHomeTeam: 2,
      goalsAwayTeam: 2,
    }], [{
      id: '1',
      match: '1',
      goalsHomeTeam: 1,
      goalsAwayTeam: 1,
    }])).toEqual(1);
    expect(calcPoints([{
      id: '1',
      goalsHomeTeam: 2,
      goalsAwayTeam: 3,
    }], [{
      id: '1',
      match: '1',
      goalsHomeTeam: 1,
      goalsAwayTeam: 2,
    }])).toEqual(1);
  });

  it('should return 2 points when bet and goals are correct', () => {
    expect(calcPoints([{
      id: '1',
      goalsHomeTeam: 2,
      goalsAwayTeam: 1,
    }], [{
      id: '1',
      match: '1',
      goalsHomeTeam: 2,
      goalsAwayTeam: 1,
    }])).toEqual(2);
    expect(calcPoints([{
      id: '1',
      goalsHomeTeam: 2,
      goalsAwayTeam: 2,
    }], [{
      id: '1',
      match: '1',
      goalsHomeTeam: 2,
      goalsAwayTeam: 2,
    }])).toEqual(2);
    expect(calcPoints([{
      id: '1',
      goalsHomeTeam: 3,
      goalsAwayTeam: 3,
    }], [{
      id: '1',
      match: '1',
      goalsHomeTeam: 3,
      goalsAwayTeam: 3,
    }])).toEqual(2);
  });

  it('should return 0 points when bet and goals are not correct', () => {
    expect(calcPoints([{
      id: '1',
      goalsHomeTeam: 2,
      goalsAwayTeam: 2,
    }], [{
      id: '1',
      match: '1',
      goalsHomeTeam: 2,
      goalsAwayTeam: 1,
    }])).toEqual(0);
    expect(calcPoints([{
      id: '1',
      goalsHomeTeam: 2,
      goalsAwayTeam: 1,
    }], [{
      id: '1',
      match: '1',
      goalsHomeTeam: 2,
      goalsAwayTeam: 2,
    }])).toEqual(0);
    expect(calcPoints([{
      id: '1',
      goalsHomeTeam: 3,
      goalsAwayTeam: 1,
    }], [{
      id: '1',
      match: '1',
      goalsHomeTeam: 3,
      goalsAwayTeam: 3,
    }])).toEqual(0);
  });
});
