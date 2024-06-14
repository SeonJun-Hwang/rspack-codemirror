import { init } from '@test/external';

document.addEventListener('DOMContentLoaded', () => {
  const $textArea = document.querySelector('textarea')!;
  init($textArea);
})