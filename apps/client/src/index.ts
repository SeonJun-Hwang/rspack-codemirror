import { init } from '@rspack-codemirror/external';

document.addEventListener('DOMContentLoaded', () => {
  const $textArea = document.querySelector('textarea')!;
  init($textArea);
})