import { matchService } from './MatchService';

describe(`Match Service`, () => {
    let dateSpy;

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
});