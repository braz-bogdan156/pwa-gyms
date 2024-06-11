import {staff} from './index'; // Імпортуємо дані про працівників

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Обробляємо POST запит (додавання нового працівника)
    const newStaffMember = req.body; // Отримуємо дані нового працівника з тіла запиту

    // Генеруємо унікальний ідентифікатор для нового працівника (наприклад, на основі часу)
    const id = Date.now();

    // Додаємо нового працівника до списку з ідентифікатором
    newStaffMember.id = id;
    staff.push(newStaffMember);

    // Повертаємо статус успішності та оновлений список працівників
    res.status(200).json(staff);
  } else {
    // Якщо отримано не POST запит, повертаємо помилку "Метод не дозволений"
    res.status(405).json({ message: 'Метод не дозволений' });
  }
}
