const r = new Rune({
  container: "body",
  width: 500,
  height: 400
});

const svg = new Rune.Svg("clock.svg");
svg.load(function(err) {
  const elementGroup = svg.toGroup();
  r.stage.add(elementGroup);
  r.draw();
});
