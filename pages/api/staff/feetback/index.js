const feedback = [
	// Олександр Петров
	{
		user_id: 101,
		coach_id: 1,
		created_date: "2023-01-01T10:00:00Z",
		raiting: 5,
		feedback: "Чудовий тренер! Завжди мотивує і підтримує."
	},
	{
		user_id: 102,
		coach_id: 1,
		created_date: "2023-02-15T12:00:00Z",
		raiting: 4,
		feedback: "Хороший підхід до клієнтів, але інколи запізнюється."
	},
	{
		user_id: 103,
		coach_id: 1,
		created_date: "2023-03-10T09:30:00Z",
		raiting: 5,
		feedback: "Завжди уважний і професійний."
	},
	{
		user_id: 104,
		coach_id: 1,
		created_date: "2023-04-05T11:00:00Z",
		raiting: 4.5,
		feedback: "Робота з Олександром допомогла мені досягти бажаних результатів."
	},
	{
		user_id: 105,
		coach_id: 1,
		created_date: "2023-05-20T14:00:00Z",
		raiting: 5,
		feedback: "Рекомендую всім цього тренера!"
	},
	// Ірина Коваленко
	{
		user_id: 106,
		coach_id: 2,
		created_date: "2023-01-10T08:00:00Z",
		raiting: 5,
		feedback: "Йога з Іриною – найкраще, що трапилось зі мною останнім часом!"
	},
	{
		user_id: 107,
		coach_id: 2,
		created_date: "2023-02-20T10:30:00Z",
		raiting: 4.8,
		feedback: "Дуже сподобалось заняття, але було трохи важко."
	},
	{
		user_id: 108,
		coach_id: 2,
		created_date: "2023-03-15T12:00:00Z",
		raiting: 5,
		feedback: "Професіонал своєї справи. Рекомендую!"
	},
	{
		user_id: 109,
		coach_id: 2,
		created_date: "2023-04-25T14:30:00Z",
		raiting: 4.9,
		feedback: "Завжди веселі і продуктивні тренування."
	},
	{
		user_id: 110,
		coach_id: 2,
		created_date: "2023-05-30T09:00:00Z",
		raiting: 5,
		feedback: "Ірина – найкращий тренер з пілатесу!"
	},
	// Дмитро Захарченко
	{
		user_id: 111,
		coach_id: 3,
		created_date: "2023-01-20T07:30:00Z",
		raiting: 4.7,
		feedback: "Дмитро допоміг мені значно покращити фізичну форму."
	},
	{
		user_id: 112,
		coach_id: 3,
		created_date: "2023-02-18T11:00:00Z",
		raiting: 4.5,
		feedback: "Чудовий тренер, але інколи заняття були надто інтенсивними."
	},
	{
		user_id: 113,
		coach_id: 3,
		created_date: "2023-03-22T09:00:00Z",
		raiting: 5,
		feedback: "Рекомендую тренування з Дмитром усім!"
	},
	{
		user_id: 114,
		coach_id: 3,
		created_date: "2023-04-15T13:00:00Z",
		raiting: 4.8,
		feedback: "Професіонал своєї справи, завжди радий допомогти."
	},
	{
		user_id: 115,
		coach_id: 3,
		created_date: "2023-05-05T10:30:00Z",
		raiting: 5,
		feedback: "Вдячний Дмитру за його підхід до роботи."
	},
	// Марія Литвиненко
	{
		user_id: 116,
		coach_id: 4,
		created_date: "2023-02-01T08:30:00Z",
		raiting: 5,
		feedback: "Марія – чудовий хореограф і тренер."
	},
	{
		user_id: 117,
		coach_id: 4,
		created_date: "2023-03-12T09:30:00Z",
		raiting: 4.9,
		feedback: "Завжди веселі і продуктивні заняття."
	},
	{
		user_id: 118,
		coach_id: 4,
		created_date: "2023-04-20T11:00:00Z",
		raiting: 5,
		feedback: "Рекомендую Марію усім!"
	},
	{
		user_id: 119,
		coach_id: 4,
		created_date: "2023-05-10T12:30:00Z",
		raiting: 5,
		feedback: "Чудовий тренер, допомогла мені досягти мети."
	},
	{
		user_id: 120,
		coach_id: 4,
		created_date: "2023-06-05T14:00:00Z",
		raiting: 5,
		feedback: "Дуже вдячний Марії за її роботу."
	},
	// Сергій Павленко
	{
		user_id: 121,
		coach_id: 5,
		created_date: "2023-02-15T08:00:00Z",
		raiting: 4.8,
		feedback: "Сергій – професіонал своєї справи."
	},
	{
		user_id: 122,
		coach_id: 5,
		created_date: "2023-03-18T10:30:00Z",
		raiting: 4.7,
		feedback: "Добрий тренер, але інколи заняття були трохи важкими."
	},
	{
		user_id: 123,
		coach_id: 5,
		created_date: "2023-04-22T12:00:00Z",
		raiting: 5,
		feedback: "Вдячний Сергію за його підтримку і мотивацію."
	},
	{
		user_id: 124,
		coach_id: 5,
		created_date: "2023-05-14T14:30:00Z",
		raiting: 4.9,
		feedback: "Чудовий тренер, завжди допомагає досягти мети."
	},
	{
		user_id: 125,
		coach_id: 5,
		created_date: "2023-06-08T09:00:00Z",
		raiting: 5,
		feedback: "Рекомендую Сергія усім!"
	}
];

export default function handler(req, res) {

	if (req.method === 'GET') {
		res.status(200).json(feedback);
	} else {
		res.status(405).json({ message: 'Метод не підтримується' });
	}
}
