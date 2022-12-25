import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', formSubmit);

function formSubmit(e) {
  e.preventDefault();
  let delay = Number(e.target.delay.value);
  console.log(delay);
  const stepValue = Number(e.target.step.value);
  console.log(stepValue);
  const amountValue = Number(e.target.amount.value);
  console.log(amountValue);

  for (let position = 1; position <= amountValue; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      }),
      (delay += stepValue);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

// ----------------
//   for (let position = 0; position < amountValue; position += 1) {
//     const element = array[position];
//     createPromise(position, delay)
//       .then(({ position, delay }) => {
//         Notiflix.Notify.failure(
//           `✅ Fulfilled promise ${position} in ${delay}ms`
//         );
//       })
//       .catch(({ position, delay }) => {
//         Notiflix.Notify.failure(
//           `❌ Rejected promise ${position} in ${delay}ms`
//         );
//       });
//   }
// }

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, delay);
//   });
// }
