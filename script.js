// ==UserScript==
// @name         Scratch Mod Menu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  aka. Scratch Userscript
// @author       soundbeat3d1
// @match        https://scratch.mit.edu/*
// @icon         https://seeklogo.com/images/S/scratch-logo-B13B10E544-seeklogo.com.png
// @grant        none
// ==/UserScript==

//Due scratch updated website it shows ';' text that makes Mod Menu look ugly
var divs = document.getElementsByTagName('div');
var div;
var i = divs.length;

while (i--) {
  div = divs[i];

  if (div.getAttribute('style') == 'color: rgb(255, 255, 255);') {
    div.parentNode.removeChild(div);
  }
}

// Mod Menu Name Text
const modmenu = document.createElement('p')
modmenu.textContent = 'Scratch Mod Menu'
modmenu.style.color = 'white'
modmenu.style.textAlign = 'center'
document.body.appendChild(modmenu)

// Refresh Scratch Button
const refresh = document.createElement('span')
refresh.innerHTML = `<button onclick="location.href=location.href">Refresh Scratch</button>`
document.body.appendChild(refresh)

// Destroy Scratch Button (Client-side)
const destroy = document.createElement('span')
destroy.innerHTML = `<button onclick="destroynow();">Destroy Scratch (Client)</button>`
document.body.appendChild(destroy)

// Destroy Scratch Script (Client-side)
const destroyscript = document.createElement('script')
destroyscript.textContent = `
function destroynow() {
    const destroyelement = document.getElementById('app')
    destroyelement.parentNode.removeChild(destroyelement)
}
`
document.body.appendChild(destroyscript)

// For This Project Text
const forthisproject = document.createElement('p')
forthisproject.textContent = 'For This Project:'
forthisproject.style.color = 'white'
document.body.appendChild(forthisproject)

// If there's no mod in the project
const disabled = document.createElement('button')
disabled.textContent = 'See Modded (Cheats) [DISABLED]'
disabled.disabled = 'true'
document.body.appendChild(disabled)

// Mod For Minecraft
if (location.href == `https://scratch.mit.edu/projects/10128407/`) {
    disabled.parentNode.removeChild(disabled)
    const minecraft = document.createElement('span')
    minecraft.innerHTML = `<button onclick="location.href='https://scratch.mit.edu/projects/937396147/'">See Modded (Cheats)</button>`
    document.body.appendChild(minecraft)
}

// Mod For Minecraft (Platformer)
if (location.href == `https://scratch.mit.edu/projects/878465277`) {
    disabled.parentNode.removeChild(disabled)
    const minecraftplatformer = document.createElement('span')
    minecraftplatformer.innerHTML = `<button onclick="location.href='https://scratch.mit.edu/projects/986714995/'">See Modded (Cheats)</button>`
    document.body.appendChild(minecraftplatformer)
}

// Mod For Roblox
if (location.href == 'https://scratch.mit.edu/projects/236106256') {
    disabled.parentNode.removeChild(disabled)
    const roblox = document.createElement('span')
    roblox.innerHTML = `<button onclick="location.href='https://scratch.mit.edu/projects/937431934/'">See Modded (Cheats)</button>`
    document.body.appendChild(roblox)
}

// Mod For Ball Blast
if (location.href == 'https://scratch.mit.edu/projects/472077983') {
    disabled.parentNode.removeChild(disabled)
    const ballblast = document.createElement('span')
    ballblast.innerHTML = `<button onclick="location.href='https://scratch.mit.edu/projects/937721458/'">See Modded (Cheats)</button>`
    document.body.appendChild(ballblast)
}

// Mod For City Simulator
if (location.href == 'https://scratch.mit.edu/projects/421467407') {
    disabled.parentNode.removeChild(disabled)
    const citysimulator = document.createElement('span')
    citysimulator.innerHTML = `<button onclick="location.href='https://scratch.mit.edu/projects/937798890/'">See Modded (Cheats)</button>`
    document.body.appendChild(citysimulator)
}

// Mod For Fortnite Z
if (location.href == 'https://scratch.mit.edu/projects/404950182') {
    disabled.parentNode.removeChild(disabled)
    const fortnitez = document.createElement('span')
    fortnitez.innerHTML = `<button onclick="location.href='https://scratch.mit.edu/projects/937805503/'">See Modded (Cheats)</button>`
    document.body.appendChild(fortnitez)
}

// Mod For Flappy Bird
if (location.href == 'https://scratch.mit.edu/projects/18262469') {
    disabled.parentNode.removeChild(disabled)
    const flappybird = document.createElement('span')
    flappybird.innerHTML = `<button onclick="location.href='https://scratch.mit.edu/projects/971565130/'">See Modded (Cheats)</button>`
    document.body.appendChild(flappybird)
}

// Mod For Geometry Dash
if (location.href == 'https://scratch.mit.edu/projects/105500895') {
    disabled.parentNode.removeChild(disabled)
    const geometrydash = document.createElement('span')
    geometrydash.innerHTML = `<button onclick="location.href='https://scratch.mit.edu/projects/971578213/'">See Modded (Cheats)</button>`
    document.body.appendChild(geometrydash)
}

// New Line
const br1 = document.createElement('br')
document.body.appendChild(br1)

// Unlimited ❤ & ⭐ Button (Client-side)
const unlimited = document.createElement('span')
unlimited.innerHTML = `<button onclick="setUnlimited();">Unlimited ❤ & ⭐ (Client)`
document.body.appendChild(unlimited)

// Unlimited ❤ & ⭐ Script (Client-side)
const unlimitedscript = document.createElement('script')
unlimitedscript.textContent = `
function setUnlimited() {
    const loves = document.getElementsByClassName('project-loves')
    const lovesfavorited = document.getElementsByClassName('project-loves loved')
    const favorites = document.getElementsByClassName('project-favorites')
    const favoritesfavorited = document.getElementsByClassName('project-favorites favorited')
    loves[0].innerHTML = '999999999'
    favorites[0].innerHTML = '999999999'
    lovesfavorited[0].innerHTML = '999999999'
    favoritesfavorited[0].innerHTML = '999999999'
}
`
document.body.appendChild(unlimitedscript)

// Auto Features Text
const autofeatures = document.createElement('p')
autofeatures.textContent = 'Auto Features:'
autofeatures.style.color = 'white'
document.body.appendChild(autofeatures)

// Remove Annoying Text ";" Button
const autoremove = document.createElement('button')
autoremove.textContent = 'Remove Annoying Text ";" [ENABLED FOREVER]'
autoremove.disabled = 'true'
document.body.appendChild(autoremove)
