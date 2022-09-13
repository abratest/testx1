(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{1401:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var o=r(3),n=r(161);class l extends n.b{constructor(e,t,r,n,l){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=n,this.clearAlpha=void 0!==l?l:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new o.Color}render(e,t,r){const o=e.autoClear;let n,l;e.autoClear=!1,void 0!==this.overrideMaterial&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),n=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,n),void 0!==this.overrideMaterial&&(this.scene.overrideMaterial=l),e.autoClear=o}}},1402:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var o=r(3),n=r(161),l=r(831),h=r(140),d=r(225);class c extends n.b{constructor(e,t,r,l){super(),this.width=void 0!==r?r:512,this.height=void 0!==l?l:512,this.clear=!0,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernelSize=32,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(),this.generateRandomKernelRotations();const c=new o.DepthTexture;c.type=o.UnsignedShortType,this.beautyRenderTarget=new o.WebGLRenderTarget(this.width,this.height,{minFilter:o.LinearFilter,magFilter:o.LinearFilter,format:o.RGBAFormat}),this.normalRenderTarget=new o.WebGLRenderTarget(this.width,this.height,{minFilter:o.NearestFilter,magFilter:o.NearestFilter,format:o.RGBAFormat,depthTexture:c}),this.ssaoRenderTarget=new o.WebGLRenderTarget(this.width,this.height,{minFilter:o.LinearFilter,magFilter:o.LinearFilter,format:o.RGBAFormat}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),void 0===h.c&&console.error("THREE.SSAOPass: The pass relies on SSAOShader."),this.ssaoMaterial=new o.ShaderMaterial({defines:Object.assign({},h.c.defines),uniforms:o.UniformsUtils.clone(h.c.uniforms),vertexShader:h.c.vertexShader,fragmentShader:h.c.fragmentShader,blending:o.NoBlending}),this.ssaoMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new o.MeshNormalMaterial,this.normalMaterial.blending=o.NoBlending,this.blurMaterial=new o.ShaderMaterial({defines:Object.assign({},h.a.defines),uniforms:o.UniformsUtils.clone(h.a.uniforms),vertexShader:h.a.vertexShader,fragmentShader:h.a.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new o.ShaderMaterial({defines:Object.assign({},h.b.defines),uniforms:o.UniformsUtils.clone(h.b.uniforms),vertexShader:h.b.vertexShader,fragmentShader:h.b.fragmentShader,blending:o.NoBlending}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new o.ShaderMaterial({uniforms:o.UniformsUtils.clone(d.a.uniforms),vertexShader:d.a.vertexShader,fragmentShader:d.a.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:o.DstColorFactor,blendDst:o.ZeroFactor,blendEquation:o.AddEquation,blendSrcAlpha:o.DstAlphaFactor,blendDstAlpha:o.ZeroFactor,blendEquationAlpha:o.AddEquation}),this.fsQuad=new n.a(null),this.originalClearColor=new o.Color}dispose(){this.beautyRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t){switch(e.setRenderTarget(this.beautyRenderTarget),e.clear(),e.render(this.scene,this.camera),this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case c.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=o.NoBlending,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case c.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=o.NoBlending,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case c.OUTPUT.Beauty:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=o.NoBlending,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case c.OUTPUT.Depth:this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case c.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=o.NoBlending,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case c.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=o.NoBlending,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=o.CustomBlending,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(e,t,r,o,n){e.getClearColor(this.originalClearColor);const l=e.getClearAlpha(),h=e.autoClear;e.setRenderTarget(r),e.autoClear=!1,null!=o&&(e.setClearColor(o),e.setClearAlpha(n||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=h,e.setClearColor(this.originalClearColor),e.setClearAlpha(l)}renderOverride(e,t,r,o,n){e.getClearColor(this.originalClearColor);const l=e.getClearAlpha(),h=e.autoClear;e.setRenderTarget(r),e.autoClear=!1,o=t.clearColor||o,n=t.clearAlpha||n,null!=o&&(e.setClearColor(o),e.setClearAlpha(n||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=h,e.setClearColor(this.originalClearColor),e.setClearAlpha(l)}setSize(e,t){this.width=e,this.height=t,this.beautyRenderTarget.setSize(e,t),this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}generateSampleKernel(){const e=this.kernelSize,t=this.kernel;for(let i=0;i<e;i++){const r=new o.Vector3;r.x=2*Math.random()-1,r.y=2*Math.random()-1,r.z=Math.random(),r.normalize();let n=i/e;n=o.MathUtils.lerp(.1,1,n*n),r.multiplyScalar(n),t.push(r)}}generateRandomKernelRotations(){void 0===l.a&&console.error("THREE.SSAOPass: The pass relies on SimplexNoise.");const e=new l.a,data=new Float32Array(64);for(let i=0;i<16;i++){const t=4*i,r=2*Math.random()-1,o=2*Math.random()-1,n=0,l=e.noise3d(r,o,n);data[t]=l,data[t+1]=l,data[t+2]=l,data[t+3]=1}this.noiseTexture=new o.DataTexture(data,4,4,o.RGBAFormat,o.FloatType),this.noiseTexture.wrapS=o.RepeatWrapping,this.noiseTexture.wrapT=o.RepeatWrapping,this.noiseTexture.needsUpdate=!0}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse((function(object){t.set(object,object.visible),(object.isPoints||object.isLine)&&(object.visible=!1)}))}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse((function(object){const e=t.get(object);object.visible=e})),t.clear()}}c.OUTPUT={Default:0,SSAO:1,Blur:2,Beauty:3,Depth:4,Normal:5}},1403:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var o=r(3),n=r(161),l=r(225),h=r(832);class d extends n.b{constructor(e,t,r,d){super(),this.strength=void 0!==t?t:1,this.radius=r,this.threshold=d,this.resolution=void 0!==e?new o.Vector2(e.x,e.y):new o.Vector2(256,256),this.clearColor=new o.Color(0,0,0);const c={minFilter:o.LinearFilter,magFilter:o.LinearFilter,format:o.RGBAFormat};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let f=Math.round(this.resolution.x/2),m=Math.round(this.resolution.y/2);this.renderTargetBright=new o.WebGLRenderTarget(f,m,c),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let i=0;i<this.nMips;i++){const e=new o.WebGLRenderTarget(f,m,c);e.texture.name="UnrealBloomPass.h"+i,e.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(e);const t=new o.WebGLRenderTarget(f,m,c);t.texture.name="UnrealBloomPass.v"+i,t.texture.generateMipmaps=!1,this.renderTargetsVertical.push(t),f=Math.round(f/2),m=Math.round(m/2)}void 0===h.a&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const v=h.a;this.highPassUniforms=o.UniformsUtils.clone(v.uniforms),this.highPassUniforms.luminosityThreshold.value=d,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new o.ShaderMaterial({uniforms:this.highPassUniforms,vertexShader:v.vertexShader,fragmentShader:v.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const T=[3,5,7,9,11];f=Math.round(this.resolution.x/2),m=Math.round(this.resolution.y/2);for(let i=0;i<this.nMips;i++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(T[i])),this.separableBlurMaterials[i].uniforms.texSize.value=new o.Vector2(f,m),f=Math.round(f/2),m=Math.round(m/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;this.compositeMaterial.uniforms.bloomFactors.value=[1,.8,.6,.4,.2],this.bloomTintColors=[new o.Vector3(1,1,1),new o.Vector3(1,1,1),new o.Vector3(1,1,1),new o.Vector3(1,1,1),new o.Vector3(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,void 0===l.a&&console.error("THREE.UnrealBloomPass relies on CopyShader");const M=l.a;this.copyUniforms=o.UniformsUtils.clone(M.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new o.ShaderMaterial({uniforms:this.copyUniforms,vertexShader:M.vertexShader,fragmentShader:M.fragmentShader,blending:o.AdditiveBlending,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new o.Color,this.oldClearAlpha=1,this.basic=new o.MeshBasicMaterial,this.fsQuad=new n.a(null)}dispose(){for(let i=0;i<this.renderTargetsHorizontal.length;i++)this.renderTargetsHorizontal[i].dispose();for(let i=0;i<this.renderTargetsVertical.length;i++)this.renderTargetsVertical[i].dispose();this.renderTargetBright.dispose()}setSize(e,t){let r=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(r,n);for(let i=0;i<this.nMips;i++)this.renderTargetsHorizontal[i].setSize(r,n),this.renderTargetsVertical[i].setSize(r,n),this.separableBlurMaterials[i].uniforms.texSize.value=new o.Vector2(r,n),r=Math.round(r/2),n=Math.round(n/2)}render(e,t,r,o,n){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const l=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),n&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let h=this.renderTargetBright;for(let i=0;i<this.nMips;i++)this.fsQuad.material=this.separableBlurMaterials[i],this.separableBlurMaterials[i].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[i].uniforms.direction.value=d.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[i]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[i].uniforms.colorTexture.value=this.renderTargetsHorizontal[i].texture,this.separableBlurMaterials[i].uniforms.direction.value=d.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[i]),e.clear(),this.fsQuad.render(e),h=this.renderTargetsVertical[i];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,n&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=l}getSeperableBlurMaterial(e){return new o.ShaderMaterial({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new o.Vector2(.5,.5)},direction:{value:new o.Vector2(.5,.5)}},vertexShader:"varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",fragmentShader:"#include <common>\n\t\t\t\tvarying vec2 vUv;\n\t\t\t\tuniform sampler2D colorTexture;\n\t\t\t\tuniform vec2 texSize;\n\t\t\t\tuniform vec2 direction;\n\n\t\t\t\tfloat gaussianPdf(in float x, in float sigma) {\n\t\t\t\t\treturn 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\n\t\t\t\t}\n\t\t\t\tvoid main() {\n\t\t\t\t\tvec2 invSize = 1.0 / texSize;\n\t\t\t\t\tfloat fSigma = float(SIGMA);\n\t\t\t\t\tfloat weightSum = gaussianPdf(0.0, fSigma);\n\t\t\t\t\tvec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;\n\t\t\t\t\tfor( int i = 1; i < KERNEL_RADIUS; i ++ ) {\n\t\t\t\t\t\tfloat x = float(i);\n\t\t\t\t\t\tfloat w = gaussianPdf(x, fSigma);\n\t\t\t\t\t\tvec2 uvOffset = direction * invSize * x;\n\t\t\t\t\t\tvec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;\n\t\t\t\t\t\tvec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;\n\t\t\t\t\t\tdiffuseSum += (sample1 + sample2) * w;\n\t\t\t\t\t\tweightSum += 2.0 * w;\n\t\t\t\t\t}\n\t\t\t\t\tgl_FragColor = vec4(diffuseSum/weightSum, 1.0);\n\t\t\t\t}"})}getCompositeMaterial(e){return new o.ShaderMaterial({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:"varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",fragmentShader:"varying vec2 vUv;\n\t\t\t\tuniform sampler2D blurTexture1;\n\t\t\t\tuniform sampler2D blurTexture2;\n\t\t\t\tuniform sampler2D blurTexture3;\n\t\t\t\tuniform sampler2D blurTexture4;\n\t\t\t\tuniform sampler2D blurTexture5;\n\t\t\t\tuniform sampler2D dirtTexture;\n\t\t\t\tuniform float bloomStrength;\n\t\t\t\tuniform float bloomRadius;\n\t\t\t\tuniform float bloomFactors[NUM_MIPS];\n\t\t\t\tuniform vec3 bloomTintColors[NUM_MIPS];\n\n\t\t\t\tfloat lerpBloomFactor(const in float factor) {\n\t\t\t\t\tfloat mirrorFactor = 1.2 - factor;\n\t\t\t\t\treturn mix(factor, mirrorFactor, bloomRadius);\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\t\t\t\t\tgl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );\n\t\t\t\t}"})}}d.BlurDirectionX=new o.Vector2(1,0),d.BlurDirectionY=new o.Vector2(0,1)},1449:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var o=r(3),n=r(225),l=r(502),h=r(161);class d extends h.b{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const o=e.getContext(),n=e.state;let l,h;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0),this.inverse?(l=0,h=1):(l=1,h=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),n.buffers.stencil.setFunc(o.ALWAYS,l,4294967295),n.buffers.stencil.setClear(h),n.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(o.EQUAL,1,4294967295),n.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),n.buffers.stencil.setLocked(!0)}}class c extends h.b{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class f{constructor(e,t){if(this.renderer=e,void 0===t){const r={minFilter:o.LinearFilter,magFilter:o.LinearFilter,format:o.RGBAFormat},n=e.getSize(new o.Vector2);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,(t=new o.WebGLRenderTarget(this._width*this._pixelRatio,this._height*this._pixelRatio,r)).texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],void 0===n.a&&console.error("THREE.EffectComposer relies on CopyShader"),void 0===l.a&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new l.a(n.a),this.clock=new o.Clock}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);-1!==t&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let i=e+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(e){void 0===e&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let i=0,t=this.passes.length;i<t;i++){const t=this.passes[i];if(!1!==t.enabled){if(t.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),t.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),t.needsSwap){if(r){const t=this.renderer.getContext(),r=this.renderer.state.buffers.stencil;r.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),r.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}void 0!==d&&(t instanceof d?r=!0:t instanceof c&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(void 0===e){const t=this.renderer.getSize(new o.Vector2);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(r,o),this.renderTarget2.setSize(r,o);for(let i=0;i<this.passes.length;i++)this.passes[i].setSize(r,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new o.OrthographicCamera(-1,1,1,-1,0,1);const m=new o.BufferGeometry;m.setAttribute("position",new o.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new o.Float32BufferAttribute([0,2,0,0,2,0],2))},161:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return d}));var o=r(3);class n{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const l=new o.OrthographicCamera(-1,1,1,-1,0,1),h=new o.BufferGeometry;h.setAttribute("position",new o.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new o.Float32BufferAttribute([0,2,0,0,2,0],2));class d{constructor(e){this._mesh=new o.Mesh(h,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,l)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}},502:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var o=r(3),n=r(161);class l extends n.b{constructor(e,t){super(),this.textureID=void 0!==t?t:"tDiffuse",e instanceof o.ShaderMaterial?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=o.UniformsUtils.clone(e.uniforms),this.material=new o.ShaderMaterial({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new n.a(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}}}]);