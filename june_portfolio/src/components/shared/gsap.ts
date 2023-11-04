const start = "top-=410px center"
const toFadeIn: GSAPTweenVars = {
  opacity: 1,
  duration: 1
}
const fromFadeIn: GSAPTweenVars = {
  opacity: 0,
  duration: 1
}
const fromFadeInUp: GSAPTweenVars = {
  ...fromFadeIn,
  y: "100%"
}
export {
  toFadeIn,
  fromFadeIn,
  fromFadeInUp,
  start
}