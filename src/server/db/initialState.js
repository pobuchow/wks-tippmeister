import md5 from 'md5';
export const initialState = {
    session: {
        authenticated: false
    },
    games: [{
        id: '2',
        name: 'saison 2019/20',
        users: [
            '1', '2', '3', '4'
        ],
        matches: [
            '5', '6', '7', '8'
        ],
        hosts: ['2'],
        isFinished: true
    },{
        id: '1',
        name: 'saison 2020/21',
        users: [
            '1', '2', '3', '4'
        ],
        matches: [
            '1', '2', '3', '4'
        ],
        hosts: ['1'],
        isFinished: false
    }],
    users: [{
        id: '1',
        name: 'User A',
        password: md5("passa")
    },{
        id: '2',
        name: 'User B',
        password: md5("passb")
    },{
        id: '3',
        name: 'User C',
        password: md5("passc")
    },{
        id: '4',
        name: 'User D',
        password: md5("passd")
    }],
    matches: [{
        id: '1',
        event_datetime: new Date(2020, 12-1, 17, 18, 0, 0, 0),
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
    },{
        id: '5',
        event_datetime: new Date(2019, 7-1, 19, 17, 30, 0, 0),
        homeTeam: 'Śląsk Wrocław',
        awayTeam: 'Lechia Gdańsk',
        goalsHomeTeam: 1,
        goalsAwayTeam: 2
    },{
        id: '6',
        event_datetime: new Date(2019, 7-1, 15, 20, 30, 0, 0),
        homeTeam: 'Jagiellonia Białystok',
        awayTeam: 'Śląsk Wrocław',
        goalsHomeTeam: 2,
        goalsAwayTeam: 1
    },{
        id: '7',
        event_datetime: new Date(2019, 7-1, 12, 12, 30, 0, 0),
        homeTeam: 'Śląsk Wrocław',
        awayTeam: 'Pogoń Szczecin',
        goalsHomeTeam: 2,
        goalsAwayTeam: 2
    },{
        id: '8',
        event_datetime: new Date(2019, 7-1, 5, 17, 30, 0, 0),
        homeTeam: 'Piast Gliwice',
        awayTeam: 'Śląsk Wrocław',
        goalsHomeTeam: 1,
        goalsAwayTeam: 0
    }],
    bets: [{
        id: '1',
        match: '1',
        owner: '1',
        goalsHomeTeam: 1,
        goalsAwayTeam: 1,
        game: '1'
    },{
        id: '2',
        match: '1',
        owner: '2',
        goalsHomeTeam: 2,
        goalsAwayTeam: 1,
        game: '1'
    },{
        id: '3',
        match: '1',
        owner: '3',
        goalsHomeTeam: 1,
        goalsAwayTeam: 2,
        game: '1'
    },{
        id: '4',
        match: '1',
        owner: '4',
        goalsHomeTeam: 2,
        goalsAwayTeam: 2,
        game: '1'
    },{
        id: '5',
        match: '2',
        owner: '3',
        goalsHomeTeam: 1,
        goalsAwayTeam: 1,
        game: '1'
    },{
        id: '6',
        match: '2',
        owner: '4',
        goalsHomeTeam: 3,
        goalsAwayTeam: 1,
        game: '1'
    },{
        id: '7',
        match: '2',
        owner: '1',
        goalsHomeTeam: 0,
        goalsAwayTeam: 0,
        game: '1'
    },{
        id: '8',
        match: '2',
        owner: '2',
        goalsHomeTeam: 1,
        goalsAwayTeam: 3,
        game: '1'
    },{
        id: '9',
        match: '3',
        owner: '3',
        goalsHomeTeam: 1,
        goalsAwayTeam: 0,
        game: '1'
    },{
        id: '10',
        match: '3',
        owner: '4',
        goalsHomeTeam: 1,
        goalsAwayTeam: 1,
        game: '1'
    },{
        id: '11',
        match: '5',
        owner: '1',
        goalsHomeTeam: 1,
        goalsAwayTeam: 1,
        game: '2'
    },{
        id: '12',
        match: '5',
        owner: '2',
        goalsHomeTeam: 2,
        goalsAwayTeam: 1,
        game: '2'
    },{
        id: '13',
        match: '5',
        owner: '3',
        goalsHomeTeam: 0,
        goalsAwayTeam: 1,
        game: '2'
    },{
        id: '14',
        match: '5',
        owner: '4',
        goalsHomeTeam: 3,
        goalsAwayTeam: 1,
        game: '2'
    },{
        id: '15',
        match: '6',
        owner: '1',
        goalsHomeTeam: 0,
        goalsAwayTeam: 1,
        game: '2'
    },{
        id: '16',
        match: '6',
        owner: '2',
        goalsHomeTeam: 2,
        goalsAwayTeam: 0,
        game: '2'
    },{
        id: '17',
        match: '6',
        owner: '3',
        goalsHomeTeam: 0,
        goalsAwayTeam: 0,
        game: '2'
    },{
        id: '18',
        match: '6',
        owner: '4',
        goalsHomeTeam: 1,
        goalsAwayTeam: 1,
        game: '2'
    },{
        id: '19',
        match: '7',
        owner: '1',
        goalsHomeTeam: 0,
        goalsAwayTeam: 3,
        game: '2'
    },{
        id: '20',
        match: '7',
        owner: '2',
        goalsHomeTeam: 2,
        goalsAwayTeam: 2,
        game: '2'
    },{
        id: '21',
        match: '7',
        owner: '3',
        goalsHomeTeam: 0,
        goalsAwayTeam: 1,
        game: '2'
    },{
        id: '22',
        match: '7',
        owner: '4',
        goalsHomeTeam: 0,
        goalsAwayTeam: 1,
        game: '2'
    },{
        id: '23',
        match: '8',
        owner: '1',
        goalsHomeTeam: 2,
        goalsAwayTeam: 3,
        game: '2'
    },{
        id: '24',
        match: '8',
        owner: '2',
        goalsHomeTeam: 3,
        goalsAwayTeam: 2,
        game: '2'
    },{
        id: '25',
        match: '8',
        owner: '3',
        goalsHomeTeam: 2,
        goalsAwayTeam: 1,
        game: '2'
    },{
        id: '26',
        match: '8',
        owner: '4',
        goalsHomeTeam: 0,
        goalsAwayTeam: 3,
        game: '2'
    }]
}