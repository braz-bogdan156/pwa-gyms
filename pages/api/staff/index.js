/*const staff = [
	{
		name : "string",
		surname : "string",
		image : "url string",
		raiting: "number",
		activity_ind : "number",
		activity_groop: "number",
		profit: "number",
		rate: "number",
		created_date: "date&time",
		date_of_start_of_work: "date&time",
		vacations: {
			count,
			list :[
				{
					start : "date&time",
					end : "date&time"
				}
			]
		},
		sick_leave: {
			count,
			list :[
				{
					start : "date&time",
					end : "date&time"
				}
			]
		},
		birthday: "date&time" ,
		date_of_dismissal : "date&time",
		gender : "string",
		biography : "string",
		specialization : ["string", "string" спеціалізація тренерів],
		phone : "string",
		email : "string",
		address: "string"
	}
]
*/

const staff = [
	{
		id: 1,
		name: "Олександр",
		surname: "Петров",
		image: "https://example.com/staff1.jpg",
		raiting: 4.5,
		activity_ind: 120,
		activity_groop: 80,
		profit: 15000,
		rate: 200,
		created_date: "2020-05-15T08:00:00Z",
		date_of_start_of_work: "2020-05-15T08:00:00Z",
		vacations: {
			count: 3,
			list: [
				{
					start: "2021-06-01T00:00:00Z",
					end: "2021-06-15T00:00:00Z"
				},
				{
					start: "2022-06-01T00:00:00Z",
					end: "2022-06-15T00:00:00Z"
				},
				{
					start: "2023-06-01T00:00:00Z",
					end: "2023-06-15T00:00:00Z"
				}
			]
		},
		sick_leave: {
			count: 1,
			list: [
				{
					start: "2023-02-20T00:00:00Z",
					end: "2023-02-28T00:00:00Z"
				}
			]
		},
		birthday: "1990-03-25T00:00:00Z",
		date_of_dismissal: null,
		gender: "Чоловік",
		biography: "Олександр має 10 років досвіду в фітнес-індустрії. Спеціалізується на силових тренуваннях та кардіо.",
		specialization: ["Силові тренування", "Кардіо"],
		phone: "+380501234567",
		email: "olexander.petrov@example.com",
		address: "Київ, вул. Шевченка, 12"
	},
	{
		id: 2,
		name: "Ірина",
		surname: "Коваленко",
		image: "https://example.com/staff2.jpg",
		raiting: 4.8,
		activity_ind: 140,
		activity_groop: 90,
		profit: 16000,
		rate: 210,
		created_date: "2019-08-20T08:00:00Z",
		date_of_start_of_work: "2019-08-20T08:00:00Z",
		vacations: {
			count: 2,
			list: [
				{
					start: "2021-07-01T00:00:00Z",
					end: "2021-07-14T00:00:00Z"
				},
				{
					start: "2022-07-01T00:00:00Z",
					end: "2022-07-14T00:00:00Z"
				}
			]
		},
		sick_leave: {
			count: 0,
			list: []
		},
		birthday: "1992-05-15T00:00:00Z",
		date_of_dismissal: null,
		gender: "Жінка",
		biography: "Ірина є сертифікованим тренером з йоги та пілатесу. Працює в індустрії понад 8 років.",
		specialization: ["Йога", "Пілатес"],
		phone: "+380502345678",
		email: "irina.kovalenko@example.com",
		address: "Львів, вул. Франка, 24"
	},
	{
		id: 3,
		name: "Дмитро",
		surname: "Захарченко",
		image: "https://example.com/staff3.jpg",
		raiting: 4.6,
		activity_ind: 130,
		activity_groop: 85,
		profit: 15500,
		rate: 205,
		created_date: "2018-09-10T08:00:00Z",
		date_of_start_of_work: "2018-09-10T08:00:00Z",
		vacations: {
			count: 4,
			list: [
				{
					start: "2019-09-01T00:00:00Z",
					end: "2019-09-14T00:00:00Z"
				},
				{
					start: "2020-09-01T00:00:00Z",
					end: "2020-09-14T00:00:00Z"
				},
				{
					start: "2021-09-01T00:00:00Z",
					end: "2021-09-14T00:00:00Z"
				},
				{
					start: "2022-09-01T00:00:00Z",
					end: "2022-09-14T00:00:00Z"
				}
			]
		},
		sick_leave: {
			count: 1,
			list: [
				{
					start: "2023-03-15T00:00:00Z",
					end: "2023-03-20T00:00:00Z"
				}
			]
		},
		birthday: "1988-07-10T00:00:00Z",
		date_of_dismissal: null,
		gender: "Чоловік",
		biography: "Дмитро є тренером з 12-річним досвідом. Спеціалізується на функціональних тренуваннях та кросфіті.",
		specialization: ["Функціональні тренування", "Кросфіт"],
		phone: "+380503456789",
		email: "dmytro.zakharchenko@example.com",
		address: "Одеса, вул. Дерибасівська, 5"
	},
	{
		id: 4,
		name: "Марія",
		surname: "Литвиненко",
		image: "https://example.com/staff4.jpg",
		raiting: 4.9,
		activity_ind: 150,
		activity_groop: 100,
		profit: 17000,
		rate: 220,
		created_date: "2021-01-05T08:00:00Z",
		date_of_start_of_work: "2021-01-05T08:00:00Z",
		vacations: {
			count: 1,
			list: [
				{
					start: "2022-01-01T00:00:00Z",
					end: "2022-01-10T00:00:00Z"
				}
			]
		},
		sick_leave: {
			count: 0,
			list: []
		},
		birthday: "1993-11-25T00:00:00Z",
		date_of_dismissal: null,
		gender: "Жінка",
		biography: "Марія є професійним тренером з танців. Має понад 6 років досвіду в хореографії та фітнесі.",
		specialization: ["Танці", "Хореографія"],
		phone: "+380504567890",
		email: "maria.lytvynenko@example.com",
		address: "Харків, вул. Сумська, 10"
	},
	{
		id: 5,
		name: "Сергій",
		surname: "Павленко",
		image: "https://example.com/staff5.jpg",
		raiting: 4.7,
		activity_ind: 125,
		activity_groop: 90,
		profit: 16000,
		rate: 210,
		created_date: "2020-03-01T08:00:00Z",
		date_of_start_of_work: "2020-03-01T08:00:00Z",
		vacations: {
			count: 2,
			list: [
				{
					start: "2021-03-01T00:00:00Z",
					end: "2021-03-15T00:00:00Z"
				},
				{
					start: "2022-03-01T00:00:00Z",
					end: "2022-03-15T00:00:00Z"
				}
			]
		},
		sick_leave: {
			count: 1,
			list: [
				{
					start: "2023-04-10T00:00:00Z",
					end: "2023-04-20T00:00:00Z"
				}
			]
		},
		birthday: "1991-09-20T00:00:00Z",
		date_of_dismissal: null,
		gender: "Чоловік",
		biography: "Сергій має 9 років досвіду в тренуванні та реабілітації. Спеціалізується на лікувальній фізкультурі та реабілітації.",
		specialization: ["Лікувальна фізкультура", "Реабілітація"],
		phone: "+380505678901",
		email: "serhiy.pavlenko@example.com",
		address: "Дніпро, вул. Поля, 18"
	}
];

export {staff}

export default function handler(req, res) {

	if (req.method === 'GET') {
		res.status(200).json(staff);
	} else {
		res.status(405).json({ message: 'Метод не підтримується' });
	}
}