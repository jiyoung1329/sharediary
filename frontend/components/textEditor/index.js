// import React, { useEffect, useRef } from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// // const TextEditor = () => <div></div>;

// // export default TextEditor;

// function Editor({ onChange, editorLoaded, name, value }) {
//   const editorRef = useRef();
//   const { CKEditor, ClassicEditor } = editorRef.current || {};

//   useEffect(() => {
//     editorRef.current = {
//       CKEditor,
//       ClassicEditor,
//     };
//   }, []);

//   return (
//     <div>
//       {editorLoaded ? (
//         <CKEditor
//           type=""
//           name={name}
//           editor={ClassicEditor}
//           data={value}
//           onChange={(event, editor) => {
//             const data = editor.getData();
//             // console.log({ event, editor, data })
//             onChange(data);
//           }}
//         />
//       ) : (
//         <div>Editor loading</div>
//       )}
//     </div>
//   );
// }

// export default Editor;