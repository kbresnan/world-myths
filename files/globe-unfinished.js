import './style.css'
import *as THREE from 'three';

import ThreeGlobe from "three-globe";

var renderer, camera, scene, controls;

let mouseX = 0
let mouseY = 0
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
var Globe;

init();
