/*{
	id: "number",
	date: "date",
	trainers: [{
		name: "stirng",
		surname: "stirng",
		image: "url",
		work_schedule_today: {
			start: "date&time",
			end: "date&time"
		},
		classes_today: "number",
		personal: [{
			client: "id number",
			start: "date&time",
			end: "date&time",
			price: "numbaer",
			status: "string",
			room: "string"
		},
		],
		group: [
			{
				activity_name : "string",
				client: "array id's",
				start: "date&time",
				end: "date&time",
				price: "numbaer",
				status: "string",
				room: "string"
			}
		]
	}]

}

*/

const trainings = [
	{
		id: 1,
		date: "2024-06-12",
		trainers: [
			{
				name: "Іван",
				surname: "Семенов",
				image: "https://example.com/trainer1.jpg",
				work_schedule_today: {
					start: "2024-06-12T08:00:00Z",
					end: "2024-06-12T16:00:00Z"
				},
				classes_today: 3,
				personal: [
					{
						client: 301,
						start: "2024-06-12T08:30:00Z",
						end: "2024-06-12T09:30:00Z",
						price: 300,
						status: "Заплановано",
						room: "Кімната 1"
					},
					{
						client: 302,
						start: "2024-06-12T10:00:00Z",
						end: "2024-06-12T11:00:00Z",
						price: 300,
						status: "Заплановано",
						room: "Кімната 2"
					}
				],
				group: [
					{
						activity_name: "Йога",
						client: [303, 304, 305],
						start: "2024-06-12T11:30:00Z",
						end: "2024-06-12T12:30:00Z",
						price: 200,
						status: "Заплановано",
						room: "Зал групових занять"
					}
				]
			}
		]
	},
	{
		id: 2,
		date: "2024-06-13",
		trainers: [
			{
				name: "Олена",
				surname: "Кузнєцова",
				image: "https://example.com/trainer2.jpg",
				work_schedule_today: {
					start: "2024-06-13T09:00:00Z",
					end: "2024-06-13T17:00:00Z"
				},
				classes_today: 4,
				personal: [
					{
						client: 306,
						start: "2024-06-13T09:30:00Z",
						end: "2024-06-13T10:30:00Z",
						price: 320,
						status: "Заплановано",
						room: "Кімната 1"
					},
					{
						client: 307,
						start: "2024-06-13T11:00:00Z",
						end: "2024-06-13T12:00:00Z",
						price: 320,
						status: "Заплановано",
						room: "Кімната 2"
					}
				],
				group: [
					{
						activity_name: "Пілатес",
						client: [308, 309, 310],
						start: "2024-06-13T12:30:00Z",
						end: "2024-06-13T13:30:00Z",
						price: 250,
						status: "Заплановано",
						room: "Зал групових занять"
					},
					{
						activity_name: "Фітнес",
						client: [311, 312, 313],
						start: "2024-06-13T14:00:00Z",
						end: "2024-06-13T15:00:00Z",
						price: 250,
						status: "Заплановано",
						room: "Зал групових занять"
					}
				]
			}
		]
	},
	{
		id: 3,
		date: "2024-06-14",
		trainers: [
			{
				name: "Дмитро",
				surname: "Кравченко",
				image: "https://example.com/trainer3.jpg",
				work_schedule_today: {
					start: "2024-06-14T07:00:00Z",
					end: "2024-06-14T15:00:00Z"
				},
				classes_today: 2,
				personal: [
					{
						client: 314,
						start: "2024-06-14T07:30:00Z",
						end: "2024-06-14T08:30:00Z",
						price: 350,
						status: "Заплановано",
						room: "Кімната 1"
					},
					{
						client: 315,
						start: "2024-06-14T09:00:00Z",
						end: "2024-06-14T10:00:00Z",
						price: 350,
						status: "Заплановано",
						room: "Кімната 2"
					}
				],
				group: [
					{
						activity_name: "Кросфіт",
						client: [316, 317, 318],
						start: "2024-06-14T10:30:00Z",
						end: "2024-06-14T11:30:00Z",
						price: 300,
						status: "Заплановано",
						room: "Зал групових занять"
					}
				]
			}
		]
	},
	{
		id: 4,
		date: "2024-06-15",
		trainers: [
			{
				name: "Марія",
				surname: "Литвиненко",
				image: "https://example.com/trainer4.jpg",
				work_schedule_today: {
					start: "2024-06-15T10:00:00Z",
					end: "2024-06-15T18:00:00Z"
				},
				classes_today: 3,
				personal: [
					{
						client: 319,
						start: "2024-06-15T10:30:00Z",
						end: "2024-06-15T11:30:00Z",
						price: 280,
						status: "Заплановано",
						room: "Кімната 1"
					},
					{
						client: 320,
						start: "2024-06-15T12:00:00Z",
						end: "2024-06-15T13:00:00Z",
						price: 280,
						status: "Заплановано",
						room: "Кімната 2"
					}
				],
				group: [
					{
						activity_name: "Танці",
						client: [321, 322, 323],
						start: "2024-06-15T13:30:00Z",
						end: "2024-06-15T14:30:00Z",
						price: 250,
						status: "Заплановано",
						room: "Зал групових занять"
					}
				]
			}
		]
	},
	{
		id: 5,
		date: "2024-06-16",
		trainers: [
			{
				name: "Сергій",
				surname: "Павленко",
				image: "https://example.com/trainer5.jpg",
				work_schedule_today: {
					start: "2024-06-16T11:00:00Z",
					end: "2024-06-16T19:00:00Z"
				},
				classes_today: 4,
				personal: [
					{
						client: 324,
						start: "2024-06-16T11:30:00Z",
						end: "2024-06-16T12:30:00Z",
						price: 300,
						status: "Заплановано",
						room: "Кімната 1"
					},
					{
						client: 325,
						start: "2024-06-16T13:00:00Z",
						end: "2024-06-16T14:00:00Z",
						price: 300,
						status: "Заплановано",
						room: "Кімната 2"
					}
				],
				group: [
					{
						activity_name: "Айробіка",
						client: [326, 327, 328],
						start: "2024-06-16T14:30:00Z",
						end: "2024-06-16T15:30:00Z",
						price: 250,
						status: "Заплановано",
						room: "Зал групових занять"
					},
					{
						activity_name: "Стретчинг",
						client: [329, 330, 331],
						start: "2024-06-16T16:00:00Z",
						end: "2024-06-16T17:00:00Z",
						price: 250,
						status: "Заплановано",
						room: "Зал групових занять"
					}
				]
			}
		]
	}
];

export default function handler(req, res) {

	if (req.method === 'GET') {
		res.status(200).json(trainings);
	} else {
		res.status(405).json({ message: 'Метод не підтримується' });
	}
}