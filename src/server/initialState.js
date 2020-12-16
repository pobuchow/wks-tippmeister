export const initialState = {
    users: [{
        id:'1',
        name: 'User A'
    },
    {
        id:'2',
        name: 'User B'
    },
    {
        id:'3',
        name: 'User C'
    },
    {
        id:'4',
        name: 'User D'
    }],
    matches: [{
        id: '1',
        event_date: '17.12.2020',
        event_time: '18:00',
        homeTeam: 'Śląsk Wrocław',
        awayTeam: 'Warta Poznań',
        goalsHomeTeam: '',
        goalsAwayTeam: ''
    },
    {
        id: '2',
        event_date: '11.12.2020',
        event_time: '18:00',
        homeTeam: 'Zagłębie Lubin',
        awayTeam: 'Śląsk Wrocław',
        goalsHomeTeam: '2',
        goalsAwayTeam: '1'
    }],
    bets: [{
        id: '1',
        match: '1',
        owner: '1',
        goalsHomeTeam: '1',
        goalsAwayTeam: '1'
    },
    {
        id: '2',
        match: '1',
        owner: '2',
        goalsHomeTeam: '2',
        goalsAwayTeam: '1'
    },
    {
        id: '3',
        match: '1',
        owner: '3',
        goalsHomeTeam: '1',
        goalsAwayTeam: '2'
    },
    {
        id: '4',
        match: '1',
        owner: '4',
        goalsHomeTeam: '2',
        goalsAwayTeam: '2'
    },
    {
        id: '5',
        match: '2',
        owner: '3',
        goalsHomeTeam: '1',
        goalsAwayTeam: '1'
    },
    {
        id: '6',
        match: '2',
        owner: '4',
        goalsHomeTeam: '3',
        goalsAwayTeam: '1'
    }]
}