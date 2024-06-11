const documents = [
	// Олександр Петров
	{
		coach_id: 1,
		name: "Сертифікат фітнес-тренера",
		created_date: "2021-06-15T10:00:00Z",
		type: "Сертифікат",
		link: "http://example.com/certificates/alexander_petrov_fitness_trainer.pdf"
	},
	{
		coach_id: 1,
		name: "Сертифікат з бодібілдингу",
		created_date: "2022-04-10T12:00:00Z",
		type: "Сертифікат",
		link: "http://example.com/certificates/alexander_petrov_bodybuilding.pdf"
	},
	{
		coach_id: 1,
		name: "Диплом про вищу освіту",
		created_date: "2020-09-01T09:00:00Z",
		type: "Диплом",
		link: "http://example.com/certificates/alexander_petrov_diploma.pdf"
	},
	// Ірина Коваленко
	{
		coach_id: 2,
		name: "Сертифікат інструктора з йоги",
		created_date: "2021-08-20T08:00:00Z",
		type: "Сертифікат",
		link: "http://example.com/certificates/iryna_kovalenko_yoga_instructor.pdf"
	},
	{
		coach_id: 2,
		name: "Сертифікат з пілатесу",
		created_date: "2022-05-15T11:30:00Z",
		type: "Сертифікат",
		link: "http://example.com/certificates/iryna_kovalenko_pilates.pdf"
	},
	{
		coach_id: 2,
		name: "Диплом про вищу освіту",
		created_date: "2019-06-01T10:00:00Z",
		type: "Диплом",
		link: "http://example.com/certificates/iryna_kovalenko_diploma.pdf"
	},
	// Дмитро Захарченко
	{
		coach_id: 3,
		name: "Сертифікат персонального тренера",
		created_date: "2020-07-25T09:30:00Z",
		type: "Сертифікат",
		link: "http://example.com/certificates/dmytro_zakharchenko_personal_trainer.pdf"
	},
	{
		coach_id: 3,
		name: "Сертифікат з кросфіту",
		created_date: "2021-11-10T10:00:00Z",
		type: "Сертифікат",
		link: "http://example.com/certificates/dmytro_zakharchenko_crossfit.pdf"
	},
	{
		coach_id: 3,
		name: "Диплом про вищу освіту",
		created_date: "2018-06-15T11:00:00Z",
		type: "Диплом",
		link: "http://example.com/certificates/dmytro_zakharchenko_diploma.pdf"
	},
	// Марія Литвиненко
	{
		coach_id: 4,
		name: "Сертифікат хореографа",
		created_date: "2019-05-20T08:30:00Z",
		type: "Сертифікат",
		link: "http://example.com/certificates/maria_lytvynenko_choreographer.pdf"
	},
	{
		coach_id: 4,
		name: "Сертифікат з фітнес-танців",
		created_date: "2021-03-18T09:30:00Z",
		type: "Сертифікат",
		link: "http://example.com/certificates/maria_lytvynenko_fitness_dance.pdf"
	},
	{
		coach_id: 4,
		name: "Диплом про вищу освіту",
		created_date: "2017-07-01T10:00:00Z",
		type: "Диплом",
		link: "http://example.com/certificates/maria_lytvynenko_diploma.pdf"
	},
	// Сергій Павленко
	{
		coach_id: 5,
		name: "Сертифікат з реабілітації",
		created_date: "2020-09-10T08:00:00Z",
		type: "Сертифікат",
		link: "http://example.com/certificates/serhiy_pavlenko_rehabilitation.pdf"
	},
	{
		coach_id: 5,
		name: "Сертифікат інструктора ЛФК",
		created_date: "2021-04-15T10:30:00Z",
		type: "Сертифікат",
		link: "http://example.com/certificates/serhiy_pavlenko_lfk_instructor.pdf"
	},
	{
		coach_id: 5,
		name: "Диплом про вищу освіту",
		created_date: "2016-06-01T09:00:00Z",
		type: "Диплом",
		link: "http://example.com/certificates/serhiy_pavlenko_diploma.pdf"
	}
];

export default function handler(req, res) {

	if (req.method === 'GET') {
		res.status(200).json(documents);
	} else {
		res.status(405).json({ message: 'Метод не підтримується' });
	}
}