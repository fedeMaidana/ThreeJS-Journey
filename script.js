import * as THREE from 'three'

const sizes = {
    width: 800,
    height: 600
}

/* CANVAS */
const canvas = document.querySelector( '#webgl' )

/* SCENE */
const scene = new THREE.Scene()

/* OBJECT */
const geometry = new THREE.BoxGeometry( 1, 1, 1 )
const material = new THREE.MeshBasicMaterial( { color: 'rgb( 255, 0, 0 )' } )
const mesh = new THREE.Mesh( geometry, material )
scene.add( mesh )

/* CAMERA */
const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height )
scene.add( camera )
camera.position.z = 3

/* RENDER */
const renderer = new THREE.WebGLRenderer( { canvas } )
renderer.setSize( sizes.height, sizes.width )
renderer.render( scene, camera )

