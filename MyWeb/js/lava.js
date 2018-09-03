
$(document).ready(function(){

var canvas = document.querySelector("canvas");
var gl = canvas.getContext("webgl");
var fragment = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragment, `
precision highp float;
uniform vec2 u_resolution;
uniform float u_time;
const vec3 top = vec3(.94, .94, .94);
const vec3 bottom = vec3(.96, .96, .96);
const vec3 plastic = vec3(.38, .93, .94);
const vec3 plastic2 = vec3(.67, .99, .85);
float rand(float seed) {
  return fract(sin(dot(vec2(12.87042, 48.382097), vec2(seed, seed + 40238.842))) * 479283.48293);
}
void main() {
  vec2 coord = gl_FragCoord.xy / u_resolution;
  float aspect = u_resolution.x / u_resolution.y;
  coord.x *= aspect;
  float t = u_time * .0003;
  float d = 0.0;
  for (float i = 0.0; i < 12.0; i++) {
    vec2 center = vec2(
      cos(rand(i - rand(i)) + i - t * (rand(i) - .5)) * .5 + .5 * aspect,
      sin(rand(i + rand(i)) + i + t * rand(i)) * .5 + .5
    );
    float size = i * 0.02;
    d += smoothstep(.9, .7, distance(center, coord) / size);
  }
  float lava = step(d, .4);
  vec3 foreground = mix(plastic, plastic2, coord.y);
  vec3 background = mix(bottom, top, coord.y);
  vec3 color = mix(foreground, background, lava);
  gl_FragColor = vec4(color, 1.0);
}
`);
gl.compileShader(fragment);
var log = gl.getShaderInfoLog(fragment);
if (log) console.log(log);
var vertex = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertex, `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 1.0, 1.0);
}
`);
gl.compileShader(vertex);
log = gl.getShaderInfoLog(vertex);
if (log) console.log(log);
var program = gl.createProgram();
gl.attachShader(program, fragment);
gl.attachShader(program, vertex);
gl.linkProgram(program);
log = gl.getProgramInfoLog(program);
if (log) console.log(log);
gl.useProgram(program);
var a_position = gl.getAttribLocation(program, "a_position");
var u_time = gl.getUniformLocation(program, "u_time");
var u_resolution = gl.getUniformLocation(program, "u_resolution");
var triangles = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, triangles, gl.STATIC_DRAW);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
  -1, 1,
  1, 1,
  1, -1,
  -1, 1,
  1, -1,
  -1, -1
]), gl.STATIC_DRAW);
gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(a_position);
var render = function(t) {
  var w = canvas.clientWidth;
  var h = canvas.clientHeight;
  canvas.width = w;
  canvas.height = h;
  gl.viewport(0, 0, w, h);
  gl.uniform1f(u_time, t);
  gl.uniform2f(u_resolution, w, h);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLES, 0, 6);
  requestAnimationFrame(render);
};
render();

});