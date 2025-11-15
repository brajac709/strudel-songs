
//setcpm(70/4) // verso
setcpm(150/4) // lumiere


const VERSO = note(`
d5 e5 f5 a4  a6 a6 
d5 e5 f5 bb4 bb6 bb6
- -  g4 -    -   -
`)
  .sound("piano")
  //.pianoroll({labels: true})

const VERSO_COUNTER = note(`
d5 e5 f5 a4  a6 a6 
d5 e7 f5 bb4 bb6 bb6
`)
  .sound("piano")
  //.pianoroll({labels: true})

const LUMIERE_CHORUS = note(`<
  [f#3 f#3 f#3 [e3 d3]]
  [f#3 f#3 f#3 [e3 d3]]
  [g3@3 f#3]
  [e3 - - -]
  [f#3 f#3 f#3 [e3 d3]]
  [f#3 f#3 f#3 [e3 f#3]]
  [e3@1.5 [d3@3 e3]]
  [c#3 - - -]
>`)
  .sound("piano")
  .pianoroll({labels:true})

const LUMIERE_BACKGROUND = note(`<
  [[f#3 f#3 f#3 f#3]]
  [[f#3 f#3 f#3 f#3]]
  [[e3 e3 e3 e3]]
  [[d3 d3 d3 d3]]
>`)
  .sound("psaltery_pluck")
  .gain(.6)
  ._pianoroll({labels:true})


$: stack(
  //VERSO,
  //VERSO_COUNTER,
  LUMIERE_CHORUS,
  LUMIERE_BACKGROUND
  
)

