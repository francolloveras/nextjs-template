import JSConfetti from 'js-confetti'

export const createConfetti = async () => {
  const jsConfetti = new JSConfetti()

  await jsConfetti.addConfetti({
    confettiColors: ['#a855f7', '#ec4899', '#f97316']
  })

  jsConfetti.destroyCanvas()
}
