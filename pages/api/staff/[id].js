import {staff} from './index';

export default function handler(req, res) {
  const {
    query: { id },
  } = req;

 
  const staffMember = staff.find(member => member.id === parseInt(id));

 
  if (!staffMember) {
    return res.status(404).json({ message: 'Працівника не знайдено' });
  }

  return res.status(200).json(staffMember);
}