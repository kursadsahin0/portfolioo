import { defineBoot } from '#q-app/wrappers'

// v-reveal: adds `is-visible` when the element scrolls into view.
export default defineBoot(({ app }) => {
  let observer = null

  const getObserver = () => {
    if (observer || typeof window === 'undefined') return observer
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    return observer
  }

  app.directive('reveal', {
    mounted (el, binding) {
      el.classList.add('reveal')
      if (binding.value) el.style.setProperty('--delay', `${binding.value}s`)
      const obs = getObserver()
      if (obs) obs.observe(el)
      else el.classList.add('is-visible')
    },
    unmounted (el) {
      observer?.unobserve(el)
    }
  })
})
