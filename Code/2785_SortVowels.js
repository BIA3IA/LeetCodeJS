/**
Given a 0-indexed string s, permute s to get a new string t such that:

    All consonants remain in their original places. More formally, if there is an index i with 0 <= i < s.length such that s[i] is a consonant, then t[i] = s[i].
    The vowels must be sorted in the nondecreasing order of their ASCII values. More formally, for pairs of indices i, j with 0 <= i < j < s.length such that s[i] and s[j] are vowels, then t[i] must not have a higher ASCII value than t[j].

Return the resulting string.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in lowercase or uppercase. Consonants comprise all letters that are not vowels.
/**

/**
 * @param {string} s
 * @return {string}
 * Vocale-order per ASCII: A E I O U a e i o u
 */
function sortVowels(s) {
  const order = ['A','E','I','O','U','a','e','i','o','u'];
  const posMap = new Map(order.map((ch, i) => [ch, i]));
  const counts = new Array(order.length).fill(0);

  const arr = s.split('');
  const vowelPositions = [];

  for (let i = 0; i < arr.length; i++) {
    const ch = arr[i];
    const idx = posMap.get(ch);
    if (idx !== undefined) {
      counts[idx]++;
      vowelPositions.push(i);
      arr[i] = null; 
    }
  }

  let k = 0;
  for (let v = 0; v < order.length; v++) {
    const ch = order[v];
    for (let c = 0; c < counts[v]; c++) {
      arr[vowelPositions[k++]] = ch;
    }
  }

  return arr.join('');
}
