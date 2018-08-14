function getPerms(str) {
  if(str.length <= 1) {
    return new Set(str)
  }

  let allCharsExceptLast = str.slice(0, str.length - 1);
  let lastChar = str.slice(-1);

  let allPermsAllCharsExceptLast = getPerms(allCharsExceptLast);

  let permutations = new Set()
  allPermsAllCharsExceptLast.forEach(perm => {
    for (let i = 0; i <= allCharsExceptLast.length; i++) {
      let permu = perm.slice(0, i) + lastChar + perm.slice(i)
      permutations.add(permu)
    }
  })
  return permutations
}
