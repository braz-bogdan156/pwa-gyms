/*[
	{
		id : 1,
		name : "string",
		description : "stting",
		created_date : "date&time",
		expiration_date : "date&time",
		overdue : flase,
		overdue_days : null,
		appointing : {
			id : "number",
			name : "string",
			surname : "string",
			image : "url"
		},
		executor : {
			id : "number",
			name : "string",
			surname : "string",
			image : "url"
		},
		fulfilled_date : "date&time",
		status : "string"
	}
]
*/

const tasks = [
	{
		id: 1,
		name: "Прибирання тренажерної зали",
		description: "Вимити підлогу, протерти тренажери, замінити рушники.",
		created_date: "2024-06-12T08:00:00Z",
		expiration_date: "2024-06-12T12:00:00Z",
		overdue: false,
		overdue_days: null,
		appointing: {
			id: 101,
			name: "Олександр",
			surname: "Петров",
			image: "https://example.com/appointing1.jpg"
		},
		executor: {
			id: 201,
			name: "Ірина",
			surname: "Коваленко",
			image: "https://example.com/executor1.jpg"
		},
		fulfilled_date: null,
		status: "Призначено"
	},
	{
		id: 2,
		name: "Перевірка обладнання",
		description: "Перевірити справність тренажерів та повідомити про несправності.",
		created_date: "2024-06-11T09:00:00Z",
		expiration_date: "2024-06-12T18:00:00Z",
		overdue: false,
		overdue_days: null,
		appointing: {
			id: 102,
			name: "Наталія",
			surname: "Сидоренко",
			image: "https://example.com/appointing2.jpg"
		},
		executor: {
			id: 202,
			name: "Дмитро",
			surname: "Захарченко",
			image: "https://example.com/executor2.jpg"
		},
		fulfilled_date: "2024-06-12T14:30:00Z",
		status: "Виконано"
	},
	{
		id: 3,
		name: "Організація групових занять",
		description: "Скласти розклад та повідомити учасників про зміни.",
		created_date: "2024-06-10T10:00:00Z",
		expiration_date: "2024-06-13T17:00:00Z",
		overdue: false,
		overdue_days: null,
		appointing: {
			id: 103,
			name: "Ігор",
			surname: "Мельник",
			image: "https://example.com/appointing3.jpg"
		},
		executor: {
			id: 203,
			name: "Анна",
			surname: "Іванова",
			image: "https://example.com/executor3.jpg"
		},
		fulfilled_date: null,
		status: "В процесі"
	},
	{
		id: 4,
		name: "Запас миючих засобів",
		description: "Перевірити залишки миючих засобів та зробити замовлення.",
		created_date: "2024-06-11T11:00:00Z",
		expiration_date: "2024-06-14T16:00:00Z",
		overdue: false,
		overdue_days: null,
		appointing: {
			id: 104,
			name: "Олена",
			surname: "Кучеренко",
			image: "https://example.com/appointing4.jpg"
		},
		executor: {
			id: 204,
			name: "Віктор",
			surname: "Тарасенко",
			image: "https://example.com/executor4.jpg"
		},
		fulfilled_date: null,
		status: "Призначено"
	},
	{
		id: 5,
		name: "Інструктаж нових співробітників",
		description: "Провести тренінг для нових співробітників щодо правил безпеки та обслуговування клієнтів.",
		created_date: "2024-06-09T13:00:00Z",
		expiration_date: "2024-06-15T15:00:00Z",
		overdue: false,
		overdue_days: null,
		appointing: {
			id: 105,
			name: "Марія",
			surname: "Богданова",
			image: "https://example.com/appointing5.jpg"
		},
		executor: {
			id: 205,
			name: "Сергій",
			surname: "Гончар",
			image: "https://example.com/executor5.jpg"
		},
		fulfilled_date: null,
		status: "В процесі"
	}
];
