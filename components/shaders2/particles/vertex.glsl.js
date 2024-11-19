const particlesFragmentShader = 
/*glsl*/ ` 
uniform vec2 uResolution;
uniform float uSize;
uniform sampler2D uParticlesTexture;
attribute vec2 aParticlesUv;
attribute vec3 aColor;
attribute float aSizes;
varying vec3 vColor;



void main()
{
    // Final position
    vec4 particle = texture(uParticlesTexture,aParticlesUv);
    vec4 modelPosition = modelMatrix * vec4(particle.xyz, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    float size_in = smoothstep(0.0,1.0,particle.a);
    float size_out =1.0 -  smoothstep(0.7,1.0,particle.a);
    float size = min(size_in,size_out);
    gl_Position = projectedPosition;

    // Point size
    gl_PointSize =size * aSizes * uSize * uResolution.y;
    gl_PointSize *= (1.0 / - viewPosition.z);

    // Varyings
    vColor =aColor;
}
`
export default particlesFragmentShader