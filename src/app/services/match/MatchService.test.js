import { matchService } from './MatchService';

describe(`Match Service`, () => {
    let dateSpy;

    const listOfMatches = [
        {
            id: '1',
            event_datetime: new Date(2020, 12-1, 3, 18, 0, 0, 0),
            homeTeam: 'Śląsk Wrocław',
            awayTeam: 'Warta Poznań',
            goalsHomeTeam: 2,
            goalsAwayTeam: 1
        },{
            id: '2',
            event_datetime: new Date(2020, 12-1, 11, 18, 0, 0, 0),
            homeTeam: 'Zagłębie Lubin',
            awayTeam: 'Śląsk Wrocław',
            goalsHomeTeam: 2,
            goalsAwayTeam: 1
        },{
            id: '3',
            event_datetime: new Date(2021, 2-1, 1, 18, 0, 0, 0),
            homeTeam: 'Stal Mielec',
            awayTeam: 'Śląsk Wrocław',
            goalsHomeTeam: null,
            goalsAwayTeam: null
        },{
            id: '4',
            event_datetime: new Date(2021, 2-1, 6, 18, 0, 0, 0),
            homeTeam: 'Piast Gliwice',
            awayTeam: 'Śląsk Wrocław',
            goalsHomeTeam: null,
            goalsAwayTeam: null
        }
    ];

    beforeAll(() => {
        dateSpy = jest
            .spyOn(global.Date, 'now')
            .mockImplementation(() => Date.parse('2021-02-23T18:00:00'));
    });

    afterAll(() => {
        dateSpy.mockRestore();
    });

    it(`should return 0 as minimum value of goals`, () => {
        expect(matchService.getGoalMinValue()).toEqual(0);
    });

    it(`should return 9 as maximum value of goals`, () => {
        expect(matchService.getGoalMaxValue()).toEqual(9);
    });

    it(`should return true if passed match is started (17h30)`, () => {
        const match = {
            event_datetime: new Date(Date.parse('2021-02-23T17:30:00'))
        }
        expect(matchService.isMatchStarted(match)).toEqual(true);
    });

    it(`should return false if passed match is not started (18h30)`, () => {
        const match = {
            event_datetime: new Date(Date.parse('2021-02-23T18:30:00'))
        }
        expect(matchService.isMatchStarted(match)).toEqual(false);
    });

    it(`should return true if passed match is over (16h29)`, () => {
        const match = {
            event_datetime: new Date(Date.parse('2021-02-23T16:29:00'))
        }
        expect(matchService.isMatchOver(match)).toEqual(true);
    });

    it(`should return false if passed match is not over (16h31)`, () => {
        const match = {
            event_datetime: new Date(Date.parse('2021-02-23T16:31:00'))
        }
        expect(matchService.isMatchOver(match)).toEqual(false);
    });

    it(`should execute function if goals pass min-max criterion`, () => {
        const setter = jest.fn();
        matchService.handleGoalInput('5', setter);
        expect(setter).toHaveBeenCalledWith(5);
    });

    it(`should not execute function if goals not pass max criterion`, () => {
        const setter = jest.fn();
        matchService.handleGoalInput('10', setter);
        expect(setter).not.toHaveBeenCalled();
    });

    it(`should not execute function if goals not pass min criterion`, () => {
        const setter = jest.fn();
        matchService.handleGoalInput('-1', setter);
        expect(setter).not.toHaveBeenCalled();
    });

    it(`should return last match from list of matches`, () => {
        expect(matchService.getLastMatch(listOfMatches)).toEqual({
            id: '2',
            event_datetime: new Date(2020, 12-1, 11, 18, 0, 0, 0),
            homeTeam: 'Zagłębie Lubin',
            awayTeam: 'Śląsk Wrocław',
            goalsHomeTeam: 2,
            goalsAwayTeam: 1
        });
    });

    it(`should return next match from list of matches`, () => {
        expect(matchService.getNextMatch(listOfMatches)).toEqual({
            id: '3',
            event_datetime: new Date(2021, 2-1, 1, 18, 0, 0, 0),
            homeTeam: 'Stal Mielec',
            awayTeam: 'Śląsk Wrocław',
            goalsHomeTeam: null,
            goalsAwayTeam: null
        });
    });
    
});