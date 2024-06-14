import { defaultKeymap, history, historyKeymap, indentWithTab } from '@codemirror/commands';
import { EditorState } from '@codemirror/state';
import { EditorView, gutter, lineNumbers, keymap } from '@codemirror/view';

const CODE_MIRROR_FOCUSED = '&.cm-focused';

export const init = ($textArea: HTMLTextAreaElement) => {
  const customTheme = EditorView.theme({ [CODE_MIRROR_FOCUSED]: { outline: 'none' } });
  const state = EditorState.create({
    doc: '',
    extensions: [
      keymap.of([...defaultKeymap, ...historyKeymap, indentWithTab]),
      history(),
      lineNumbers(),
      gutter({ class: 'cm-gutter' }),
      customTheme,
    ],
  });
  const view = new EditorView({ state, parent: $textArea.parentElement! });
}
