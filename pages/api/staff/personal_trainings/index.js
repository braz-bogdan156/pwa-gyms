const personalTrainings = [
	// Олександр Петров
	{
		coach_id: 1,
		id: 1,
		client_id: 101,
		date: "2023-06-15T10:00:00Z",
		duration: 60,
		status: "Завершено"
	},
	{
		coach_id: 1,
		id: 2,
		client_id: 102,
		date: "2023-06-17T09:00:00Z",
		duration: 60,
		status: "Завершено"
	},
	{
		coach_id: 1,
		id: 3,
		client_id: 103,
		date: "2023-06-20T08:00:00Z",
		duration: 60,
		status: "Заплановано"
	},
	{
		coach_id: 1,
		id: 4,
		client_id: 104,
		date: "2023-06-22T11:00:00Z",
		duration: 60,
		status: "Завершено"
	},
	{
		coach_id: 1,
		id: 5,
		client_id: 105,
		date: "2023-06-25T10:30:00Z",
		duration: 60,
		status: "Заплановано"
	},
	// Ірина Коваленко
	{
		coach_id: 2,
		id: 6,
		client_id: 106,
		date: "2023-06-16T12:00:00Z",
		duration: 60,
		status: "Завершено"
	},
	{
		coach_id: 2,
		id: 7,
		client_id: 107,
		date: "2023-06-18T10:30:00Z",
		duration: 60,
		status: "Завершено"
	},
	{
		coach_id: 2,
		id: 8,
		client_id: 108,
		date: "2023-06-21T11:00:00Z",
		duration: 60,
		status: "Заплановано"
	},
	{
		coach_id: 2,
		id: 9,
		client_id: 109,
		date: "2023-06-24T08:00:00Z",
		duration: 60,
		status: "Завершено"
	},
	{
		coach_id: 2,
		id: 10,
		client_id: 110,
		date: "2023-06-26T10:30:00Z",
		duration: 60,
		status: "Заплановано"
	},
	// Дмитро Захарченко
	{
		coach_id: 3,
		id: 11,
		client_id: 111,
		date: "2023-06-19T09:30:00Z",
		duration: 60,
		status: "Завершено"
	},
	{
		coach_id: 3,
		id: 12,
		client_id: 112,
		date: "2023-06-22T11:00:00Z",
		duration: 60,
		status: "Завершено"
	},
	{
		coach_id: 3,
		id: 13,
		client_id: 113,
		date: "2023-06-24T09:00:00Z",
		duration: 60,
		status: "Заплановано"
	},
	{
		coach_id: 3,
		id: 14,
		client_id: 114,
		date: "2023-06-27T08:30:00Z",
		duration: 60,
		status: "Завершено"
	},
	{
		coach_id: 3,
		id: 15,
		client_id: 115,
		date: "2023-06-29T12:00:00Z",
		duration: 60,
		status: "Заплановано"
	},
	// Марія Литвиненко
	{
		coach_id: 4,
		id: 16,
		client_id: 116,
		date: "2023-06-23T08:30:00Z",
		duration: 60,
		status: "Завершено"
	},
	{
		coach_id: 4,
		id: 17,
		client_id: 117,
		date: "2023-06-25T09:30:00Z",
		duration: 60,
		status: "Завершено"
	},
	{
		coach_id: 4,
		id: 18,
		client_id: 118,
		date: "2023-06-28T11:00:00Z",
		duration: 60,
		status: "Заплановано"
	},
	// Сергій Павленко
	{
		coach_id: 5,
		id: 19,
		client_id: 119,
		date: "2023-06-24T08:00:00Z",
		duration: 60,
		status: "Завершено"
	},
	{
		coach_id: 5,
		id: 20,
		client_id: 120,
		date: "2023-06-26T10:30:00Z",
		duration: 60,
		status: "Завершено"
	},
	{
		coach_id: 5,
		id: 21,
		client_id: 121,
		date: "2023-06-29T12:00:00Z",
		duration: 60,
		status: "Заплановано"
	}
];

export default function handler(req, res) {

	if (req.method === 'GET') {
		res.status(200).json(personalTrainings);
	} else {
		res.status(405).json({ message: 'Метод не підтримується' });
	}
}