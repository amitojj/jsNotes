//same as arr.map().flat()
const arr1 = [1, 2, 1];

const result1 = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(result1);


/**
 * Calculates the distribution of valid student notes.
 * Valid notes are between 0 and 6.
 * @param {Object[]} students - Array of student objects containing name and notes arrays
 * @returns {Object} Object with keys representing note values and values representing frequency
 */
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
