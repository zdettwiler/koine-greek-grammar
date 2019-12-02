import conjugate from '../src/conjugate';

describe('Indicative Present', () => {
  it('should conjugate λυω properly', () => {
    expect(conjugate('λυω', 'indicative', 'present')).toEqual({
      sg: {
        1: 'λυω',
        2: 'λυεις',
        3: 'λυει'
      },
      pl: {
        1: 'λυομεν',
        2: 'λυετε',
        3: 'λυουσι(ν)'
      }
    })
  })

  it('should conjugate φιλεω properly', () => {
    expect(conjugate('φιλεω', 'indicative', 'present')).toEqual({
      sg: {
        1: 'φιλω',
        2: 'φιλεις',
        3: 'φιλει'
      },
      pl: {
        1: 'φιλουμεν',
        2: 'φιλειτε',
        3: 'φιλουσι(ν)'
      }
    })
  })
})

describe('Indicative Future', () => {
  it('should conjugate λυω properly', () => {
    expect(conjugate('λυω', 'indicative', 'future')).toEqual({
      sg: {
        1: 'λυσω',
        2: 'λυσεις',
        3: 'λυσει'
      },
      pl: {
        1: 'λυσομεν',
        2: 'λυσετε',
        3: 'λυσουσι(ν)'
      }
    })
  })
})