export interface Card
{
    id: number;
    name: string;
    status: string;
}

export let CardDatabase: Card[] = 
[
];

for (let i = 0; i < 10; i++)
{
    let random;
    if (Math.random() >= 0.5)
        random = 'green';
    else
        random = 'red';
    CardDatabase.push({id: i+1, name: 'Название', status: random})
}