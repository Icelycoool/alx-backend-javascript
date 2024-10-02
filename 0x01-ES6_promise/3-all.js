import { uploadPhoto, createUser } from './utils';

const promises = [uploadPhoto(), createUser()];

export default function handleProfileSignup() {
  return Promise.all(promises)
    .then((results) => {
      const profile = results[0].body;
      const { firstName } = results[1];
      const { lastName } = results[1];
      console.log(`${profile} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
