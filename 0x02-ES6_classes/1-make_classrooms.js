import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classeRoom1 = new ClassRoom(19);
  const classeRoom2 = new ClassRoom(20);
  const classeRoom3 = new ClassRoom(34);
  return [classeRoom1, classeRoom2, classeRoom3];
}
