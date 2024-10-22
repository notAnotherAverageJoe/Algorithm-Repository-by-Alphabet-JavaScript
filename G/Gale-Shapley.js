function stableMarriage(menPreferences, womenPreferences) {
  const n = menPreferences.length;
  const freeMen = Array.from({ length: n }, (_, i) => i); // Men are free
  const womenPartner = Array(n).fill(null); // Women partner, initially none
  const menPartner = Array(n).fill(null); // Men partner, initially none
  const menNextProposal = Array(n).fill(0); // Next proposal index for each man

  // While there are free men who haven't proposed to all women
  while (freeMen.length > 0) {
    const man = freeMen.pop(); // Get a free man
    const womanIndex = menNextProposal[man]; // Get the next woman to propose to
    const woman = menPreferences[man][womanIndex]; // Get the woman

    // Propose to the woman
    if (womenPartner[woman] === null) {
      // Woman is free
      womenPartner[woman] = man; // Pair them
      menPartner[man] = woman; // Man is now paired
    } else {
      // Woman is currently engaged
      const currentPartner = womenPartner[woman];
      // Check if the woman prefers the new man
      if (
        womenPreferences[woman].indexOf(man) <
        womenPreferences[woman].indexOf(currentPartner)
      ) {
        // The woman prefers the new man
        womenPartner[woman] = man; // Pair the new man with the woman
        menPartner[man] = woman; // Update the man's partner
        freeMen.push(currentPartner); // The current partner is now free
        menPartner[currentPartner] = null; // Update his partner
      } else {
        // The woman prefers her current partner, so the man remains free
        freeMen.push(man);
      }
    }

    // Move to the next woman for the man
    menNextProposal[man]++;
  }

  return menPartner; // Return the partners for each man
}

// Example preferences
const menPreferences = [
  [0, 1, 2], // Man 0 prefers Woman 0, then Woman 1, then Woman 2
  [1, 2, 0], // Man 1 prefers Woman 1, then Woman 2, then Woman 0
  [2, 0, 1], // Man 2 prefers Woman 2, then Woman 0, then Woman 1
];

const womenPreferences = [
  [1, 0, 2], // Woman 0 prefers Man 1, then Man 0, then Man 2
  [0, 1, 2], // Woman 1 prefers Man 0, then Man 1, then Man 2
  [0, 1, 2], // Woman 2 prefers Man 0, then Man 1, then Man 2
];

const pairs = stableMarriage(menPreferences, womenPreferences);
console.log(pairs); // Output the pairs of men and their partners
