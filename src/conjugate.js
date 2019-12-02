import endings from './endings'

const conjugationPattern = {
  sg: {
    1: '',
    2: '',
    3: ''
  },
  pl: {
    1: '',
    2: '',
    3: ''
  }
}

function contraction(augment, stem, suffix, ending) {
  const contractions = {
    ε: {
      'ει': 'ει',
      'ου': 'ου',
      'ε': 'ει',
      'ο': 'ου',
      'ω': 'ω'
    }
  }

  let stemSuffix = stem + suffix
  let lastStemChar = stemSuffix.slice(-1)

  if (contractions[lastStemChar]) {
    for (let endingStart of Object.keys(contractions[lastStemChar])) {
      if (ending.startsWith(endingStart)) {
        return stemSuffix.slice(0, -1) // remove character from end of stem
          + contractions[lastStemChar][endingStart] // add output of contraction
          + ending.slice(endingStart.length) // remove chars from beginning of ending
      }
    }

  } else { // no contraction is done
    return stemSuffix + ending
  }
}

export default function conjugate(verb, mood, tense) {
  const stem = verb.slice(0, verb.length - 1)
  let conjugation = conjugationPattern
  
  for (let nb in conjugation) {
    for (let pers in conjugation[nb]) {
      conjugation[nb][pers] = contraction(
        endings[mood][tense].augment,
        stem,
        endings[mood][tense].suffix,
        endings[mood][tense].endings[nb][pers]
      )
    }
  }
  
  return conjugation
}