import sort from '../../script';

test('should sort', () => {
  const heroes = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10}

  ];
  const result = sort([
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    ])
  expect(result).toEqual(heroes)});
