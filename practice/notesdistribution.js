// ─── Using Foreach And Filter ──────────────────────────────────────────── ✣ ─
// function getNotesDistribution(students) {
//     let notesDistribution ={};
//     students.forEach((s) => {
//        let notes = s.notes.filter((x) =>  x > 0 && x <6);
//        notes.forEach((c) => {
//         notesDistribution[c] = (notesDistribution[c] || 0) + 1;
//        })
//      });
//      return notesDistribution;
// }
// ─── Using Reduce And Filter and foreach ───────────────────────────────────────────── ✣ ─

// function getNotesDistribution(students) {
//   return students.reduce((acc, student) => {
//     const validNotes = student.notes.filter((note) => note >= 1 && note <= 5);
//     validNotes.forEach((note) => {
//       acc[note] = (acc[note] || 0) + 1;
//     });
//     return acc;
//   }, {});
// }
// ─── Using Flatmap Filter And Reduce ───────────────────────────────────── ✣ ─
function getNotesDistribution(students) {
  const validNotes = students
    .flatMap((s) => s.notes)
    .filter((note) => note > 0 && note < 6);

  const notesDistribution = validNotes.reduce((acc, note) => {
    acc[note] = (acc[note] || 0) + 1;
    return acc;
  }, {});

  return notesDistribution;
}

let result = getNotesDistribution([
  {
    name: "Steve",
    notes: [5, 5, 3, -1, 6],
  },
  {
    name: "John",
    notes: [3, 2, 5, 0, -3],
  },
]);

console.log(result);
